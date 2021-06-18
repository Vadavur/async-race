import './car-field.scss';
import { BaseComponent } from '../shared/base-component';
import {
  INLINE_SVG_IDS,
  CAR_ENGINE_STATUS,
  CAR_INLINE_SVG,
} from '../shared/constants';

export class CarField extends BaseComponent {
  engineStatus = CAR_ENGINE_STATUS.engineStopped;

  constructor(carColor: string, carId: number) {
    super('div', ['car-field']);
    this.element.innerHTML = CAR_INLINE_SVG;
    this.setCarView(carColor, carId);

    // fetch('/public/car.svg')
    //   .then((res) => res.text())
    //   .then((SVGText) => {
    //     this.element.innerHTML = SVGText;
    //     this.setCarView(carColor, carId);
    //   });
  }

  setCarView(carColor: string, carId: number): void {
    this.element.setAttribute('data-before', carId.toString());
    const carBody = this.element.querySelector(`#${INLINE_SVG_IDS.carBody}`);
    (carBody as HTMLElement).style.fill = carColor;
  }
}
