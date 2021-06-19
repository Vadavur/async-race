import {
  CLASSES,
  REQUEST_PARAMS,
  CAR_ENGINE_STATUS,
  RACE_STATUS,
  BROKEN_ENGINE_FLAG,
} from '../shared/constants';
import { EngineDataService } from './engine-data-service';
import { RaceChartField } from '../race-chart-field/race-chart-field';

export class RaceControlService {
  static raceStatus = RACE_STATUS.stopped;

  static activeCars = 0;

  static bestCar = { time: 0, id: '' };

  static raceIdChart: { carId: number; finishTime: number }[];

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
    this.raceIdChart = [];
    this.raceStatus = RACE_STATUS.started;
    this.activeCars = 0;
    this.raceControlHandlers.forEach((handler) => {
      this.activeCars++;
      handler.startTestButton.setAttribute('disabled', '');
      handler.runEngine();
    });
  }

  public static resetRace(): void {
    this.raceStatus = RACE_STATUS.stopped;
    this.activeCars = 0;
    this.raceControlHandlers.forEach((handler) => {
      handler.startTestButton.removeAttribute('disabled');
      handler.stopTestButton.setAttribute('disabled', '');
      handler.stopTest();
    });
  }

  public setTestControlButtons(): void {
    this.startTestButton.addEventListener('click', () => {
      this.carElement.classList.remove(CLASSES.engineStatus.wrecked);
      this.runEngine();
    });
    this.stopTestButton.setAttribute('disabled', '');
    this.stopTestButton.addEventListener('click', () => {
      this.stopTestButton.setAttribute('disabled', '');
      this.startTestButton.removeAttribute('disabled');
      this.stopTest();
    });
  }

  private runEngine(): void {
    this.startTestButton.setAttribute('disabled', '');
    this.carElement.classList.remove(CLASSES.engineStatus.wrecked);
    this.carElement.classList.add(CLASSES.engineStatus.on);
    this.carElement.setAttribute(
      'engineStatus',
      CAR_ENGINE_STATUS.engineStarted
    );
    EngineDataService.setEngineMode(
      this.carId,
      REQUEST_PARAMS.engineStarted
    ).then((result) => {
      if (RaceControlService.raceStatus === RACE_STATUS.stopped) {
        this.stopTestButton.removeAttribute('disabled');
      }
      const finishTime = result.distance / result.velocity;
      this.runCar(finishTime, EngineDataService.getCarResult(this.carId));
    });
  }

  private runCar(finishTime: number, getCarResult: Promise<string>): void {
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
    getCarResult
      .then(() => {
        if (RaceControlService.raceStatus === RACE_STATUS.started) {
          RaceControlService.activeCars--;
          RaceControlService.putCarResultToChart(this.carId, finishTime);
          if (RaceControlService.activeCars === 0) {
            RaceControlService.showRaceResult();
          }
        }
      })
      .catch(() => {
        if (RaceControlService.raceStatus === RACE_STATUS.started) {
          RaceControlService.activeCars--;
          RaceControlService.putCarResultToChart(
            this.carId,
            BROKEN_ENGINE_FLAG
          );
          if (RaceControlService.activeCars === 0) {
            RaceControlService.showRaceResult();
          }
        }
        if (this.requestId) {
          window.cancelAnimationFrame(this.requestId);
        }
        if (
          this.carElement.getAttribute('engineStatus') ===
          CAR_ENGINE_STATUS.engineStarted
        ) {
          this.carElement.classList.add(CLASSES.engineStatus.wrecked);
          this.stopEngine();
        }
      });
  }

  private static putCarResultToChart(carId: number, finishTime: number): void {
    if (finishTime === BROKEN_ENGINE_FLAG || this.raceIdChart.length === 0) {
      this.raceIdChart.push({ carId, finishTime });
    } else {
      const nextPosition = this.raceIdChart.findIndex((elem) => {
        return (
          elem.finishTime === BROKEN_ENGINE_FLAG || elem.finishTime > finishTime
        );
      });
      if (nextPosition === -1) {
        this.raceIdChart.push({ carId, finishTime });
      } else {
        this.raceIdChart.splice(nextPosition, 0, { carId, finishTime });
      }
    }
  }

  private static showRaceResult(): void {
    const raceChartField = new RaceChartField(this.raceIdChart);
    document.body.appendChild(raceChartField.element);
    raceChartField.closeButton.element.addEventListener('click', () => {
      this.resetRace();
      raceChartField.element.remove();
      this.startRaceButton.removeAttribute('disabled');
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
      this.carElement.classList.remove(CLASSES.engineStatus.on);
      if (RaceControlService.raceStatus === RACE_STATUS.stopped) {
        this.startTestButton.removeAttribute('disabled');
      }
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
    this.carElement.classList.remove(CLASSES.engineStatus.wrecked);
    this.carElement.style.transform = `translateX(0)`;
  }
}
