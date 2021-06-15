import './track-line.scss';
import { BaseComponent } from '../shared/base-component';
import { CarField } from '../car-field/car-field';

export class TrackLine extends BaseComponent {
  private readonly carField: CarField;

  constructor(carColor: string, carId: number) {
    super('div', ['track-line']);
    this.carField = new CarField(carColor, carId);
    this.element.appendChild(this.carField.element);
    console.log('remove this plug flag');
  }

  plugMethod(): void {
    console.log(this.element.toString(), 'remove this plug flag');
  }
}
