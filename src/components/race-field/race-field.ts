import './race-field.scss';
import { BaseComponent } from '../shared/base-component';
import { Text } from '../shared/text/text';
import { Button } from '../shared/button/button';
import { DataBaseService } from '../services/data-base-service';
import { TEXT_TEMPLATES, BUTTONS } from '../shared/constants';
import { CarDataInterface } from '../shared/interfaces';
import { TrackSection } from '../track-section/track-section';

export class RaceField extends BaseComponent {
  private carsNumber: number;

  private currentPageNumber = 1;

  private garageTitle: Text;

  private pageTitle: Text;

  private readonly trackSections: TrackSection[] = [];

  private readonly carsOnTrack: CarDataInterface[];

  private readonly buttonField: HTMLDivElement;

  readonly previousPageButton: Button;

  readonly nextPageButton: Button;

  constructor() {
    super('div', ['race-field']);
    this.carsNumber = DataBaseService.getCarsNumber();
    this.garageTitle = this.setGarageTitle();
    this.pageTitle = this.setPageTitle();
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
    this.carsOnTrack = DataBaseService.getCarsOnPage(this.currentPageNumber);
    this.setTrackSections();
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

  private setTrackSections() {
    this.carsOnTrack.forEach((car) => {
      const trackSection = new TrackSection(car);
      this.trackSections.push(trackSection);
      this.element.appendChild(trackSection.element);
    });
  }
}
