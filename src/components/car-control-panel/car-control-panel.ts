import './car-control-panel.scss';
import { BaseComponent } from '../shared/base-component';
import { ButtonComponent } from '../shared/button-component/button-component';
import { BUTTONS, TEXT_TEMPLATES } from '../shared/constants';
import { TextComponent } from '../shared/text-component/text-component';

export class CarControlPanel extends BaseComponent {
  private readonly carName: TextComponent;

  private readonly selectCarButton: ButtonComponent;

  private readonly removeCarButton: ButtonComponent;

  private readonly startTestButton: ButtonComponent;

  private readonly stopTestButton: ButtonComponent;

  constructor(carName: string) {
    super('div', ['car-control-panel']);
    this.carName = new TextComponent(
      [TEXT_TEMPLATES.carName.className],
      carName
    );
    this.selectCarButton = new ButtonComponent(
      [BUTTONS.selectCar.className],
      BUTTONS.selectCar.label
    );
    this.removeCarButton = new ButtonComponent(
      [BUTTONS.removeCar.className],
      BUTTONS.removeCar.label
    );
    this.startTestButton = new ButtonComponent(
      [BUTTONS.startCarTest.className],
      BUTTONS.startCarTest.label
    );
    this.stopTestButton = new ButtonComponent(
      [BUTTONS.stopCarTest.className],
      BUTTONS.stopCarTest.label
    );
    this.element.appendChild(this.carName.element);
    this.element.appendChild(this.selectCarButton.element);
    this.element.appendChild(this.removeCarButton.element);
    this.element.appendChild(this.startTestButton.element);
    this.element.appendChild(this.stopTestButton.element);
  }
}
