import './car-field.scss';
import { BaseComponent } from '../shared/base-component';
import { CAR_SVG_VECTOR } from '../shared/constants';

export class CarField extends BaseComponent {
  constructor(carColor: string, carId: number) {
    super('div', ['car-field']);
    this.element.innerHTML = CAR_SVG_VECTOR;
    this.setCarBodyColor(carColor);
    this.setCarNumber(carId);
  }

  setCarBodyColor(carColor: string): void {
    const carBody = this.element.querySelector('#car-body');
    (carBody as HTMLElement).style.fill = carColor;
  }

  setCarNumber(carId: number): void {
    this.element.setAttribute('data-before', carId.toString());
  }
}
