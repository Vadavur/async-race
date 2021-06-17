import { CUSTOM_EVENTS } from '../shared/constants';
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

    document.addEventListener(CUSTOM_EVENTS.refreshPage, () => {
      this.refreshPage();
    });
  }

  showGarageField(): void {
    this.pageField.winnersField.element.style.display = 'none';
    this.pageField.garageField.element.style.display = 'block';
  }

  showWinnersField(): void {
    this.pageField.garageField.element.style.display = 'none';
    this.pageField.winnersField.element.style.display = 'block';
  }

  refreshPage(): void {
    this.pageField.garageField.refreshRaceField();
  }
}
