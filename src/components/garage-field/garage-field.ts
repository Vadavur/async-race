import './garage-field.scss';
import { BUTTONS, INPUTS_ATTRIBUTES } from '../shared/constants';
import { BaseComponent } from '../shared/base-component';
import { CarDataForm } from '../car-data-form/car-data-form';
import { RaceControlPanel } from '../race-control-panel/race-control-panel';
import { RaceField } from '../race-field/race-field';
import { GarageViewService } from '../services/garage-view-service';
import { DataControlService } from '../services/data-control-service';

export class GarageField extends BaseComponent {
  readonly createCarForm: CarDataForm;

  readonly updateCarForm: CarDataForm;

  readonly raceControlPanel: RaceControlPanel;

  readonly raceField: RaceField;

  private readonly garageViewer: GarageViewService;

  constructor() {
    super('div', ['garage-field']);

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
    this.raceField = new RaceField();
    this.garageViewer = new GarageViewService(this.raceField);
    this.garageViewer.generateRaceField();

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
    this.element.appendChild(this.createCarForm.element);
    this.element.appendChild(this.updateCarForm.element);
    this.element.appendChild(this.raceControlPanel.element);
    this.element.appendChild(this.raceField.element);
  }
}
