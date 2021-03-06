import './template-field.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';

export class TemplateField extends BaseComponent {
  private readonly plugField: PlugField;

  constructor() {
    super('div', ['template-field']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('remove this plug flag');
  }

  plugMethod(): void {
    console.log(this.element, 'remove this plug flag');
  }
}
