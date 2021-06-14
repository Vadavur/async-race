import './car-control-panel.scss';
import { BaseComponent } from '../shared/base-component';
import { Button } from '../shared/button/button';
import { BUTTONS } from '../shared/constants';

export class CarControlPanel extends BaseComponent {
  private readonly startRaceButton: Button;

  private readonly resetGarageButton: Button;

  private readonly generateCarsButton: Button;

  constructor() {
    super('div', ['car-control-panel']);
    this.startRaceButton = new Button(
      [BUTTONS.startRace.className],
      BUTTONS.startRace.label
    );
    this.resetGarageButton = new Button(
      [BUTTONS.resetGarage.className],
      BUTTONS.resetGarage.label
    );
    this.generateCarsButton = new Button(
      [BUTTONS.generateCars.className],
      BUTTONS.generateCars.label
    );
    this.element.appendChild(this.startRaceButton.element);
    this.element.appendChild(this.resetGarageButton.element);
    this.element.appendChild(this.generateCarsButton.element);
  }
}
