import './winners-field.scss';
import {
  BUTTONS,
  INPUTS_ATTRIBUTES,
  INITIAL_PAGE_NUMBER,
  TEXT_TEMPLATES,
  SERVER_ERROR,
} from '../shared/constants';
import { BaseComponent } from '../shared/base-component';
import { ButtonComponent } from '../shared/button-component/button-component';
import { CarDataForm } from '../car-data-form/car-data-form';
import { RaceControlPanel } from '../race-control-panel/race-control-panel';
import { DataControlService } from '../services/data-control-service';
import { TextComponent } from '../shared/text-component/text-component';
import { CarsDataService } from '../services/cars-data-service';
import { RaceControlService } from '../services/race-control-service';
import { CarDataInterface } from '../shared/interfaces';
import { TrackSection } from '../track-section/track-section';

export class WinnersField extends BaseComponent {
  currentPageNumber: number;

  buttonField: HTMLDivElement;

  previousPageButton: ButtonComponent;

  nextPageButton: ButtonComponent;

  constructor() {
    super('div', ['winners-field']);
    this.buttonField = document.createElement('div');
    this.buttonField.classList.add('winners-field__button-field');

    this.previousPageButton = new ButtonComponent(
      [BUTTONS.previousPage.className],
      BUTTONS.previousPage.label
    );
    this.nextPageButton = new ButtonComponent(
      [BUTTONS.nextPage.className],
      BUTTONS.nextPage.label
    );
    this.buttonField.appendChild(this.previousPageButton.element);
    this.buttonField.appendChild(this.nextPageButton.element);

    this.currentPageNumber = INITIAL_PAGE_NUMBER;

    // this.element.appendChild(this.raceField.element);
    this.element.appendChild(this.buttonField);
  }

  // public refreshRaceField(): void {
  // this.element.insertBefore(this.raceField.element, this.buttonField);
  // const winnersFieldElements = this.element.childNodes;
  // winnersFieldElements[winnersFieldElements.length - 1].remove();
  // this.raceField = new RaceField(this.currentPageNumber);
  // this.element.appendChild(this.raceField.element);
  // }
}
