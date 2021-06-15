import './car-data-form.scss';
import { BaseComponent } from '../shared/base-component';
import { InputComponent } from '../shared/input-component/input-component';
import { ButtonComponent } from '../shared/button-component/button-component';

export class CarDataForm extends BaseComponent {
  private readonly carNameInput: InputComponent;

  private readonly carColorInput: InputComponent;

  private readonly submitButton: ButtonComponent;

  constructor(
    carNameInputAttributes: { [attributeName: string]: string },
    carColorInputAttributes: { [attributeName: string]: string },
    buttonData: { label: string; className: string }
  ) {
    super('div', ['car-data-form']);
    this.carNameInput = new InputComponent(carNameInputAttributes);
    this.carColorInput = new InputComponent(carColorInputAttributes);
    this.submitButton = new ButtonComponent(
      [buttonData.className],
      buttonData.label
    );
    this.element.appendChild(this.carNameInput.element);
    this.element.appendChild(this.carColorInput.element);
    this.element.appendChild(this.submitButton.element);
  }
}
