import './car-data-form.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';

export class CarDataForm extends BaseComponent {
  private readonly plugField: PlugField;

  constructor(buttonData: { label: string; className: string }) {
    super('div', ['car-data-form']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('remove this plug flag');
  }
}
