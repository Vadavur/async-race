import './track-section.scss';
import { BaseComponent } from '../shared/base-component';
import { PlugField } from '../plug-field/plug-field';
import { CarDataInterface } from '../shared/interfaces';

export class TrackSection extends BaseComponent {
  private readonly plugField: PlugField;

  constructor(car: CarDataInterface) {
    super('div', ['track-section']);
    this.plugField = new PlugField();
    this.element.appendChild(this.plugField.element);
    console.log('remove this plug flag');
  }

  plugMethod(): void {
    console.log(this.element, 'remove this plug flag');
  }
}
