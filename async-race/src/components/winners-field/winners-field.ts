import './winners-field.scss';
import { BUTTONS, INITIAL_VALUES } from '../shared/constants';
import { BaseComponent } from '../shared/base-component';
import { ButtonComponent } from '../shared/button-component/button-component';
import { ScoreField } from '../score-field/score-field';

export class WinnersField extends BaseComponent {
  currentPageNumber: number;

  currentSortType: string;

  currentSortOrder: string;

  scoreField: ScoreField;

  buttonField: HTMLDivElement;

  previousPageButton: ButtonComponent;

  nextPageButton: ButtonComponent;

  constructor() {
    super('div', ['winners-field']);
    this.currentPageNumber = INITIAL_VALUES.pageNumber;
    this.currentSortType = INITIAL_VALUES.sortType;
    this.currentSortOrder = INITIAL_VALUES.sortOrder;
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

    this.scoreField = new ScoreField(this.currentPageNumber);

    this.element.appendChild(this.scoreField.element);
    this.element.appendChild(this.buttonField);
  }

  public refreshScoreField(): void {
    this.scoreField.element.remove();
    this.scoreField = new ScoreField(this.currentPageNumber);
    this.element.insertBefore(this.scoreField.element, this.buttonField);
  }
}
