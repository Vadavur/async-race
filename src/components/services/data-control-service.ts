import { DEFAULT_CAR_COLOR, CUSTOM_EVENTS } from '../shared/constants';
import { CarDataInterface } from '../shared/interfaces';
import { CarsDataService } from './cars-data-service';

export class DataControlService {
  static createCarButton: HTMLButtonElement;

  static updateCarButton: HTMLButtonElement;

  static createCarNameInput: HTMLInputElement;

  static createCarColorInput: HTMLInputElement;

  static updateCarNameInput: HTMLInputElement;

  static updateCarColorInput: HTMLInputElement;

  readonly selectCarButton: HTMLButtonElement;

  readonly removeCarButton: HTMLButtonElement;

  static selectedCarId: number;

  readonly car: CarDataInterface;

  constructor(
    selectCarButton: HTMLButtonElement,
    removeCarButton: HTMLButtonElement,
    car: CarDataInterface
  ) {
    this.selectCarButton = selectCarButton;
    this.removeCarButton = removeCarButton;
    this.car = car;

    this.setCarSelectButton();
    this.setCarRemoveButton();
  }

  public static setCarCreateButton(
    createCarButton: HTMLButtonElement,
    createCarNameInput: HTMLInputElement,
    createCarColorInput: HTMLInputElement
  ): void {
    this.createCarButton = createCarButton;
    this.createCarNameInput = createCarNameInput;
    this.createCarColorInput = createCarColorInput;
    this.createCarButton.addEventListener('click', () => {
      this.createCar();
    });
  }

  public static setCarUpdateButton(
    updateCarButton: HTMLButtonElement,
    updateCarNameInput: HTMLInputElement,
    updateCarColorInput: HTMLInputElement
  ): void {
    this.updateCarButton = updateCarButton;
    this.updateCarNameInput = updateCarNameInput;
    this.updateCarColorInput = updateCarColorInput;
    this.setInputsInitialState();
    this.updateCarButton.addEventListener('click', () => {
      this.updateCar(this.selectedCarId);
    });
  }

  public static createCar(): void {
    const dataParams = {
      name: this.createCarNameInput.value,
      color: this.createCarColorInput.value,
    };
    CarsDataService.createCar(JSON.stringify(dataParams)).then(() => {
      document.dispatchEvent(
        new CustomEvent(CUSTOM_EVENTS.refreshPage, {
          detail: CUSTOM_EVENTS.refreshPage,
        })
      );
      this.setInputsInitialState();
    });
  }

  public static updateCar(carId: number): void {
    const dataParams = {
      name: this.updateCarNameInput.value,
      color: this.updateCarColorInput.value,
    };
    CarsDataService.updateCar(carId, JSON.stringify(dataParams)).then(() => {
      document.dispatchEvent(
        new CustomEvent(CUSTOM_EVENTS.refreshPage, {
          detail: CUSTOM_EVENTS.refreshPage,
        })
      );
      this.setInputsInitialState();
    });
  }

  public setCarSelectButton(): void {
    this.selectCarButton.addEventListener('click', () => {
      DataControlService.updateCarButton.removeAttribute('disabled');
      DataControlService.updateCarNameInput.removeAttribute('disabled');
      DataControlService.updateCarColorInput.removeAttribute('disabled');
      DataControlService.updateCarNameInput.value = this.car.name;
      DataControlService.updateCarColorInput.value = this.car.color;
      DataControlService.selectedCarId = this.car.id;
    });
  }

  public setCarRemoveButton(): void {
    this.removeCarButton.addEventListener('click', () => {
      CarsDataService.removeCar(this.car.id).then(() => {
        document.dispatchEvent(
          new CustomEvent(CUSTOM_EVENTS.refreshPage, {
            detail: CUSTOM_EVENTS.refreshPage,
          })
        );
        DataControlService.setInputsInitialState();
      });
    });
  }

  private static setInputsInitialState() {
    this.updateCarButton.setAttribute('disabled', '');
    this.updateCarNameInput.setAttribute('disabled', '');
    this.updateCarColorInput.setAttribute('disabled', '');
    this.updateCarNameInput.value = '';
    this.updateCarColorInput.value = DEFAULT_CAR_COLOR;
    this.createCarNameInput.value = '';
    this.createCarColorInput.value = DEFAULT_CAR_COLOR;
  }
}
