import './car-data-form.scss';
import { BaseComponent } from '../shared/base-component';
import { Input } from '../shared/input/input';
import { Button } from '../shared/button/button';

export class CarDataForm extends BaseComponent {
  private readonly carNameInput: Input;

  private readonly carColorInput: Input;

  private readonly submitButton: Button;

  constructor(
    carNameInputAttributes: { [attributeName: string]: string },
    carColorInputAttributes: { [attributeName: string]: string },
    buttonData: { label: string; className: string }
  ) {
    super('div', ['car-data-form']);
    this.carNameInput = new Input(carNameInputAttributes);
    this.carColorInput = new Input(carColorInputAttributes);
    this.submitButton = new Button([buttonData.className], buttonData.label);
    this.element.appendChild(this.carNameInput.element);
    this.element.appendChild(this.carColorInput.element);
    this.element.appendChild(this.submitButton.element);
    console.log('remove this plug flag');
  }
}
