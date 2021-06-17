import './garage-field.scss';
import {
  BUTTONS,
  INPUTS_ATTRIBUTES,
  INITIAL_PAGE_NUMBER,
} from '../shared/constants';
import { BaseComponent } from '../shared/base-component';
import { ButtonComponent } from '../shared/button-component/button-component';
import { CarDataForm } from '../car-data-form/car-data-form';
import { RaceControlPanel } from '../race-control-panel/race-control-panel';
import { RaceField } from '../race-field/race-field';
import { DataControlService } from '../services/data-control-service';

export class GarageField extends BaseComponent {
  readonly createCarForm: CarDataForm;

  readonly updateCarForm: CarDataForm;

  readonly raceControlPanel: RaceControlPanel;

  currentPageNumber: number;

  raceField: RaceField;

  buttonField: HTMLDivElement;

  previousPageButton: ButtonComponent;

  nextPageButton: ButtonComponent;

  constructor() {
    super('div', ['garage-field']);
    this.buttonField = document.createElement('div');
    this.buttonField.classList.add('garage-field__button-field');

    this.previousPageButton = new ButtonComponent(
      [BUTTONS.previousPage.className],
      BUTTONS.previousPage.label
    );
    this.nextPageButton = new ButtonComponent(
      [BUTTONS.nextPage.className],
      BUTTONS.nextPage.label
    );
    this.buttonField.appendChild(this.previousPageButton.element);
    this.buttonField.appendChild(this.nextPageButton.element);

    this.currentPageNumber = INITIAL_PAGE_NUMBER;

    this.createCarForm = new CarDataForm(
      INPUTS_ATTRIBUTES.createCarName,
      INPUTS_ATTRIBUTES.createCarColor,
      BUTTONS.createCar
    );
    this.updateCarForm = new CarDataForm(
      INPUTS_ATTRIBUTES.updateCarName,
      INPUTS_ATTRIBUTES.updateCarColor,
      BUTTONS.updateCar
    );
    this.raceControlPanel = new RaceControlPanel();
    this.raceField = new RaceField(this.currentPageNumber);

    DataControlService.setCarCreateButton(
      this.createCarForm.submitButton.element as HTMLButtonElement,
      this.createCarForm.carNameInput.element as HTMLInputElement,
      this.createCarForm.carColorInput.element as HTMLInputElement
    );
    DataControlService.setCarUpdateButton(
      this.updateCarForm.submitButton.element as HTMLButtonElement,
      this.updateCarForm.carNameInput.element as HTMLInputElement,
      this.updateCarForm.carColorInput.element as HTMLInputElement
    );
    DataControlService.setСreateRandomCarsButton(
      this.raceControlPanel.generateCarsButton.element as HTMLButtonElement
    );
    this.element.appendChild(this.createCarForm.element);
    this.element.appendChild(this.updateCarForm.element);
    this.element.appendChild(this.raceControlPanel.element);
    this.element.appendChild(this.raceField.element);
    this.element.appendChild(this.buttonField);
  }

  public refreshRaceField(): void {
    this.raceField.element.remove();
    this.raceField = new RaceField(this.currentPageNumber);
    this.element.insertBefore(this.raceField.element, this.buttonField);
    // const garageFieldElements = this.element.childNodes;
    // garageFieldElements[garageFieldElements.length - 1].remove();
    // this.raceField = new RaceField(this.currentPageNumber);
    // this.element.appendChild(this.raceField.element);
  }
}
