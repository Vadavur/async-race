import './race-field.scss';
import { BaseComponent } from '../shared/base-component';
import { Text } from '../shared/text/text';
import { Button } from '../shared/button/button';
import { DataBaseService } from '../services/data-base-service';
import { TrackField } from '../track-field/track-field';
import { TEXT_TEMPLATES, BUTTONS } from '../shared/constants';

export class RaceField extends BaseComponent {
  private carsNumber: number;

  private currentPageNumber = 1;

  private garageTitle: Text;

  private pageTitle: Text;

  private trackField: TrackField;

  private readonly buttonField: HTMLDivElement;

  readonly previousPageButton: Button;

  readonly nextPageButton: Button;

  constructor() {
    super('div', ['race-field']);
    this.carsNumber = DataBaseService.getCarsNumber();
    this.garageTitle = this.setGarageTitle();
    this.pageTitle = this.setPageTitle();
    this.trackField = new TrackField();

    this.buttonField = document.createElement('div');
    this.buttonField.classList.add('race-field__button-field');

    this.previousPageButton = new Button(
      [BUTTONS.previousPage.className],
      BUTTONS.previousPage.label
    );
    this.nextPageButton = new Button(
      [BUTTONS.nextPage.className],
      BUTTONS.nextPage.label
    );

    this.element.appendChild(this.garageTitle.element);
    this.element.appendChild(this.pageTitle.element);
    this.element.appendChild(this.trackField.element);
    this.buttonField.appendChild(this.previousPageButton.element);
    this.buttonField.appendChild(this.nextPageButton.element);
    this.element.appendChild(this.buttonField);
  }

  private setGarageTitle(): Text {
    const garageTitleText = Text.createTextFromTemplate(
      TEXT_TEMPLATES.garageTitle,
      [this.carsNumber.toString()]
    );
    return new Text([TEXT_TEMPLATES.garageTitle.className], garageTitleText);
  }

  private setPageTitle(): Text {
    const pageTitleText = Text.createTextFromTemplate(
      TEXT_TEMPLATES.pageTitle,
      [this.currentPageNumber.toString()]
    );
    return new Text([TEXT_TEMPLATES.pageTitle.className], pageTitleText);
  }
}
