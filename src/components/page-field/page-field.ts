import './page-field.scss';
import { BaseComponent } from '../shared/base-component';
import { GarageField } from '../garage-field/garage-field';
import { WinnersField } from '../winners-field/winners-field';
import { Button } from '../shared/button/button';
import { BUTTONS } from '../shared/constants';
import { GarageService } from '../services/garage-service';
import { RaceService } from '../services/race-service';

export class PageField extends BaseComponent {
  private readonly buttonField: HTMLDivElement;

  readonly garageButton: Button;

  readonly winnersButton: Button;

  readonly garageField: GarageField;

  readonly winnersField: WinnersField;

  private readonly garageController: GarageService;

  private readonly raceController: RaceService;

  constructor() {
    super('div', ['page-field']);

    this.garageField = new GarageField();
    this.winnersField = new WinnersField();
    this.buttonField = document.createElement('div');
    this.buttonField.classList.add('page-field__button-field');

    this.garageButton = new Button(
      [BUTTONS.toGarage.className],
      BUTTONS.toGarage.label
    );
    this.winnersButton = new Button(
      [BUTTONS.toWinners.className],
      BUTTONS.toWinners.label
    );

    this.element.appendChild(this.buttonField);
    this.buttonField.appendChild(this.garageButton.element);
    this.buttonField.appendChild(this.winnersButton.element);
    this.element.appendChild(this.garageField.element);
    this.element.appendChild(this.winnersField.element);
    this.garageController = new GarageService(this.garageField);
    this.raceController = new RaceService(this.garageField);
  }
}
