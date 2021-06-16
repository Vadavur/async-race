import './track-line.scss';
import { BaseComponent } from '../shared/base-component';
import { CarField } from '../car-field/car-field';

export class TrackLine extends BaseComponent {
  readonly carField: CarField;

  constructor(carColor: string, carId: number) {
    super('div', ['track-line']);
    this.carField = new CarField(carColor, carId);
    this.element.appendChild(this.carField.element);
  }
}
