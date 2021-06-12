import './cars-field.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';

export class CarsField extends BaseComponent {
  private readonly plugField: PlugField;

  constructor() {
    super('div', ['cars-field']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('remove this plug flag');
  }
}
