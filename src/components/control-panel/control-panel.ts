import './control-panel.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';

export class ControlPanel extends BaseComponent {
  private readonly plugField: PlugField;

  constructor() {
    super('div', ['control-panel']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('remove this plug flag');
  }
}
