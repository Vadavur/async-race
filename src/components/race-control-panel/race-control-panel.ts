import './race-control-panel.scss';
import { BaseComponent } from '../shared/base-component';
import { ButtonComponent } from '../shared/button/button';
import { BUTTONS } from '../shared/constants';

export class RaceControlPanel extends BaseComponent {
  private readonly startRaceButton: ButtonComponent;

  private readonly resetGarageButton: ButtonComponent;

  private readonly generateCarsButton: ButtonComponent;

  constructor() {
    super('div', ['race-control-panel']);
    this.startRaceButton = new ButtonComponent(
      [BUTTONS.startRace.className],
      BUTTONS.startRace.label
    );
    this.resetGarageButton = new ButtonComponent(
      [BUTTONS.resetGarage.className],
      BUTTONS.resetGarage.label
    );
    this.generateCarsButton = new ButtonComponent(
      [BUTTONS.generateCars.className],
      BUTTONS.generateCars.label
    );
    this.element.appendChild(this.startRaceButton.element);
    this.element.appendChild(this.resetGarageButton.element);
    this.element.appendChild(this.generateCarsButton.element);
  }
}
