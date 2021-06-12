import './page-field.scss';
import { BaseComponent } from '../shared/base-component';
import { GarageField } from '../garage-field/garage-field';
import { WinnersField } from '../winners-field/winners-field';
import { Button } from '../shared/button/button';
import { BUTTONS } from '../shared/constants';

export class PageField extends BaseComponent {
  private readonly buttonField: HTMLDivElement;

  private readonly garageButton: Button;

  private readonly winnersButton: Button;

  private readonly garageField: GarageField;

  private readonly winnersField: WinnersField;

  constructor() {
    super('div', ['page-field']);

    this.garageField = new GarageField();
    this.winnersField = new WinnersField();

    this.showGarageField();

    this.buttonField = document.createElement('div');

    this.garageButton = new Button(
      [BUTTONS.toGarage.className],
      BUTTONS.toGarage.label,
      this.showGarageField
    );
    this.winnersButton = new Button(
      [BUTTONS.toWinners.className],
      BUTTONS.toWinners.label,
      this.showWinnersField
    );

    this.element.appendChild(this.buttonField);
    this.buttonField.appendChild(this.garageButton.element);
    this.buttonField.appendChild(this.winnersButton.element);
    this.element.appendChild(this.garageField.element);
    this.element.appendChild(this.winnersField.element);
  }

  private showGarageField() {
    this.winnersField.element.style.display = 'none';
    this.garageField.element.style.display = 'block';
  }

  private showWinnersField() {
    this.garageField.element.style.display = 'none';
    this.winnersField.element.style.display = 'block';
  }
}
