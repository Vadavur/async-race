import './page-field.scss';
import { BaseComponent } from '../shared/base-component';
import { GarageField } from '../garage-field/garage-field';
import { WinnersField } from '../winners-field/winners-field';
import { ButtonComponent } from '../shared/button-component/button-component';
import { BUTTONS, TEXT_TEMPLATES } from '../shared/constants';
import { GarageViewService } from '../services/garage-view-service';
import { RaceControlService } from '../services/race-control-service';

export class PageField extends BaseComponent {
  private readonly gameTitle: HTMLElement;

  private readonly buttonField: HTMLDivElement;

  readonly garageButton: ButtonComponent;

  readonly winnersButton: ButtonComponent;

  readonly garageField: GarageField;

  readonly winnersField: WinnersField;

  readonly finishLine: HTMLDivElement;

  // private readonly garageDataHandler: GarageViewService;

  private readonly raceController: RaceControlService;

  constructor() {
    super('div', ['page-field']);

    this.gameTitle = document.createElement('h1');
    this.gameTitle.innerText = TEXT_TEMPLATES.gameTitle.text;
    this.gameTitle.classList.add(TEXT_TEMPLATES.gameTitle.className);

    this.buttonField = document.createElement('div');
    this.buttonField.classList.add('page-field__button-field');

    this.garageButton = new ButtonComponent(
      [BUTTONS.toGarage.className],
      BUTTONS.toGarage.label
    );
    this.winnersButton = new ButtonComponent(
      [BUTTONS.toWinners.className],
      BUTTONS.toWinners.label
    );
    this.garageField = new GarageField();
    this.winnersField = new WinnersField();
    this.finishLine = document.createElement('div');
    this.finishLine.classList.add('page-field__finish-line');

    this.element.appendChild(this.gameTitle);
    this.buttonField.appendChild(this.garageButton.element);
    this.buttonField.appendChild(this.winnersButton.element);
    this.element.appendChild(this.buttonField);
    this.element.appendChild(this.garageField.element);
    this.element.appendChild(this.winnersField.element);
    this.element.appendChild(this.finishLine);
    // this.garageDataHandler = new GarageViewService(this.garageField);
    this.raceController = new RaceControlService(this.garageField);
  }
}
