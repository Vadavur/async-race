import './garage-field.scss';
import { BaseComponent } from '../shared/base-component';
import { CarDataForm } from '../car-data-form/car-data-form';
import { ControlPanel } from '../control-panel/control-panel';
import { CarsField } from '../cars-field/cars-field';
import { BUTTONS, INPUTS_ATTRIBUTES } from '../shared/constants';

export class GarageField extends BaseComponent {
  private readonly createCarForm: CarDataForm;

  private readonly updateCarForm: CarDataForm;

  private readonly controlPanel: ControlPanel;

  private readonly carsField: CarsField;

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
    this.controlPanel = new ControlPanel();
    this.carsField = new CarsField();

    this.element.appendChild(this.createCarForm.element);
    this.element.appendChild(this.updateCarForm.element);
    this.element.appendChild(this.controlPanel.element);
    this.element.appendChild(this.carsField.element);
  }
}
