import './garage-field.scss';
import { BaseComponent } from '../shared/base-component';
import { CarDataForm } from '../car-data-form/car-data-form';
import { ControlPanel } from '../control-panel/control-panel';
import { CarsField } from '../cars-field/cars-field';
import { BUTTONS } from '../shared/constants';

export class GarageField extends BaseComponent {
  private readonly createCarForm: CarDataForm;

  private readonly updateCarForm: CarDataForm;

  private readonly controlPanel: ControlPanel;

  private readonly carsField: CarsField;

  constructor() {
    super('div', ['garage-field']);

    this.createCarForm = new CarDataForm(BUTTONS.createCar);
    this.updateCarForm = new CarDataForm(BUTTONS.updateCar);
    this.controlPanel = new ControlPanel();
    this.carsField = new CarsField();

    this.element.appendChild(this.createCarForm.element);
    this.element.appendChild(this.updateCarForm.element);
    this.element.appendChild(this.controlPanel.element);
    this.element.appendChild(this.carsField.element);
  }
}
