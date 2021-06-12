import './winners-field.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';

export class WinnersField extends BaseComponent {
  private readonly plugField: PlugField;

  constructor() {
    super('div', ['winners-field']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('plug');
  }
}
