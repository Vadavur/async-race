import {
  ENGINE_STATUS_ELEMENT_CLASS,
  REQUEST_PARAMS,
  CAR_ENGINE_STATUS_PARAMETER_NAME,
  CAR_ENGINE_STATUS,
} from '../shared/constants';
import { EngineDataService } from './engine-data-service';

export class RaceControlService {
  static raceControlHandlers: RaceControlService[] = [];

  static startRaceButton: HTMLButtonElement;

  static resetRaceButton: HTMLButtonElement;

  readonly carElement: HTMLElement;

  readonly trackLineElement: HTMLElement;

  readonly startTestButton: HTMLButtonElement;

  readonly stopTestButton: HTMLButtonElement;

  readonly carId: number;

  private requestId?: number;

  constructor(
    carElement: HTMLElement,
    trackLineElement: HTMLElement,
    startTestButton: HTMLButtonElement,
    stopTestButton: HTMLButtonElement,
    carId: number
  ) {
    this.carElement = carElement;
    this.trackLineElement = trackLineElement;
    this.startTestButton = startTestButton;
    this.stopTestButton = stopTestButton;
    this.carId = carId;

    this.setTestControlButtons();
  }

  public static setRaceControlButtons(
    startRaceButton: HTMLButtonElement,
    resetRaceButton: HTMLButtonElement
  ): void {
    this.startRaceButton = startRaceButton;
    this.resetRaceButton = resetRaceButton;
    this.startRaceButton.addEventListener('click', () => {
      this.startRaceButton.setAttribute('disabled', '');
      this.startRace();
    });
    this.resetRaceButton.addEventListener('click', () => {
      this.startRaceButton.removeAttribute('disabled');
      this.resetRace();
    });
  }

  public static startRace(): void {
    this.raceControlHandlers.forEach((handler) => {
      handler.startTestButton.setAttribute('disabled', '');
      handler.runEngine();
    });
  }

  public static resetRace(): void {
    this.raceControlHandlers.forEach((handler) => {
      handler.startTestButton.removeAttribute('disabled');
      handler.stopTest();
    });
  }

  public setTestControlButtons(): void {
    this.startTestButton.addEventListener('click', () => {
      this.startTestButton.setAttribute('disabled', '');
      this.carElement.classList.remove(ENGINE_STATUS_ELEMENT_CLASS.wrecked);
      this.runEngine();
    });
    this.stopTestButton.addEventListener('click', () => {
      this.startTestButton.removeAttribute('disabled');
      this.stopTest();
    });
  }

  private runEngine(): void {
    this.carElement.classList.remove(ENGINE_STATUS_ELEMENT_CLASS.wrecked);
    this.carElement.classList.add(ENGINE_STATUS_ELEMENT_CLASS.on);
    this.carElement.setAttribute(
      'engineStatus',
      CAR_ENGINE_STATUS.engineStarted
    );
    EngineDataService.setEngineMode(
      this.carId,
      REQUEST_PARAMS.engineStarted
    ).then((result) => {
      const finishTime = result.distance / result.velocity;
      this.runCar(finishTime, EngineDataService.getRaceStatus(this.carId));
    });
  }

  private runCar(finishTime: number, raceStatus: Promise<string>): void {
    let startTime: DOMHighResTimeStamp = 0;

    const raceCompletedValue = 1;
    const carLength = this.carElement.offsetWidth;
    const raceDistance =
      (this.trackLineElement.offsetWidth as number) - carLength;

    const moveCar = (currentTime: DOMHighResTimeStamp) => {
      if (!startTime) startTime = currentTime;
      const raceProgressValue = (currentTime - startTime) / finishTime;
      this.carElement.style.transform = `translateX(${Math.min(
        raceProgressValue * raceDistance,
        raceDistance
      )}%)`;
      if (raceProgressValue < raceCompletedValue) {
        this.requestId = requestAnimationFrame(moveCar);
      } else {
        if (this.requestId) {
          window.cancelAnimationFrame(this.requestId);
        }
        this.stopEngine();
      }
    };

    window.requestAnimationFrame(moveCar);
    raceStatus.catch(() => {
      if (this.requestId) {
        window.cancelAnimationFrame(this.requestId);
      }
      if (
        this.carElement.getAttribute('engineStatus') ===
        CAR_ENGINE_STATUS.engineStarted
      ) {
        this.carElement.classList.add(ENGINE_STATUS_ELEMENT_CLASS.wrecked);
        this.stopEngine();
      }
    });
  }

  private stopEngine(): void {
    EngineDataService.setEngineMode(
      this.carId,
      REQUEST_PARAMS.engineStopped
    ).then(() => {
      this.carElement.setAttribute(
        'engineStatus',
        CAR_ENGINE_STATUS.engineStopped
      );
      this.carElement.classList.remove(ENGINE_STATUS_ELEMENT_CLASS.on);
      this.startTestButton.removeAttribute('disabled');
    });
  }

  private stopTest(): void {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
    if (
      this.carElement.getAttribute('engineStatus') ===
      CAR_ENGINE_STATUS.engineStarted
    ) {
      this.stopEngine();
    }
    this.carElement.classList.remove(ENGINE_STATUS_ELEMENT_CLASS.wrecked);
    this.carElement.style.transform = `translateX(0)`;
  }
}
