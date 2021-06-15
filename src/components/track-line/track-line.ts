import './track-line.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';

export class TrackLine extends BaseComponent {
  private readonly plugField: PlugField;

  constructor(carColor: string) {
    super('div', ['track-line']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('remove this plug flag');
  }

  plugMethod(): void {
    console.log(this.element.toString(), 'remove this plug flag');
  }
}
