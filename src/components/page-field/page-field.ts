import './page-field.scss';
import { BaseComponent } from '../shared/base-component';
import { GarageField } from '../garage-field/garage-field';
import { WinnersField } from '../winners-field/winners-field';
import { Button } from '../shared/button/button';
import { BUTTONS } from '../shared/constants';
import { GarageDataService } from '../services/garage-data-service';
import { RaceControlService } from '../services/race-control-service';

export class PageField extends BaseComponent {
  private readonly buttonField: HTMLDivElement;

  readonly garageButton: Button;

  readonly winnersButton: Button;

  readonly garageField: GarageField;

  readonly winnersField: WinnersField;

  private readonly garageDataHandler: GarageDataService;

  private readonly raceController: RaceControlService;

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

    this.buttonField.appendChild(this.garageButton.element);
    this.buttonField.appendChild(this.winnersButton.element);
    this.element.appendChild(this.buttonField);
    this.element.appendChild(this.garageField.element);
    this.element.appendChild(this.winnersField.element);
    this.garageDataHandler = new GarageDataService(this.garageField);
    this.raceController = new RaceControlService(this.garageField);
  }
}
