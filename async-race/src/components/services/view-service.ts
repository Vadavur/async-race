import { CUSTOM_EVENTS, INITIAL_VALUES } from '../shared/constants';
import { PageField } from '../page-field/page-field';

export class ViewService {
  private readonly pageField: PageField;

  constructor(pageField: PageField) {
    this.pageField = pageField;
    this.pageField.garageButton.element.addEventListener('click', () => {
      this.showGarageField();
    });
    this.pageField.winnersButton.element.addEventListener('click', () => {
      this.showWinnersField();
    });
    this.setGaragePaginationButtons();
    this.setWinnersPaginationButtons();

    document.addEventListener(CUSTOM_EVENTS.refreshAllPages, () => {
      this.refreshAllPages();
    });

    document.addEventListener(CUSTOM_EVENTS.refreshWinnersPage, () => {
      this.refreshWinnersPage();
    });
  }

  showGarageField(): void {
    this.pageField.winnersField.element.style.display = 'none';
    this.pageField.garageField.element.style.display = 'block';
  }

  private showWinnersField(): void {
    this.pageField.garageField.element.style.display = 'none';
    this.pageField.winnersField.element.style.display = 'block';
  }

  private setGaragePaginationButtons(): void {
    const firstPageNumber = 1;
    this.pageField.garageField.previousPageButton.element.addEventListener(
      'click',
      () => {
        if (this.pageField.garageField.currentPageNumber !== firstPageNumber) {
          this.pageField.garageField.currentPageNumber--;
          this.refreshGaragePage();
        }
      }
    );

    this.pageField.garageField.nextPageButton.element.addEventListener(
      'click',
      () => {
        if (
          this.pageField.garageField.raceField.carsNumber &&
          this.pageField.garageField.currentPageNumber !==
            Math.ceil(
              this.pageField.garageField.raceField.carsNumber /
                INITIAL_VALUES.garagePageLimit
            )
        ) {
          this.pageField.garageField.currentPageNumber++;
          this.refreshGaragePage();
        }
      }
    );
  }

  private setWinnersPaginationButtons(): void {
    const firstPageNumber = 1;
    this.pageField.winnersField.previousPageButton.element.addEventListener(
      'click',
      () => {
        if (this.pageField.winnersField.currentPageNumber !== firstPageNumber) {
          this.pageField.winnersField.currentPageNumber--;
          this.refreshGaragePage();
        }
      }
    );

    this.pageField.winnersField.nextPageButton.element.addEventListener(
      'click',
      () => {
        if (
          this.pageField.winnersField.scoreField.winnersNumber &&
          this.pageField.winnersField.currentPageNumber !==
            Math.ceil(
              this.pageField.winnersField.scoreField.winnersNumber /
                INITIAL_VALUES.garagePageLimit
            )
        ) {
          this.pageField.winnersField.currentPageNumber++;
          this.refreshGaragePage();
        }
      }
    );
  }

  private refreshAllPages(): void {
    this.pageField.garageField.refreshRaceField();
    this.pageField.winnersField.refreshScoreField();
  }

  private refreshGaragePage(): void {
    this.pageField.garageField.refreshRaceField();
    this.pageField.winnersField.refreshScoreField();
  }

  private refreshWinnersPage(): void {
    this.pageField.winnersField.refreshScoreField();
  }
}
