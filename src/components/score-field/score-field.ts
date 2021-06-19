import './score-field.scss';
import { BaseComponent } from '../shared/base-component';
import { TextComponent } from '../shared/text-component/text-component';
import { WinnersDataService } from '../services/winners-data-service';
import { CarsDataService } from '../services/cars-data-service';
import {
  TEXT_TEMPLATES,
  SERVER_ERROR,
  TABLE_HEADER_CONTENT,
  CLASSES,
} from '../shared/constants';
import { WinnerDataInterface } from '../shared/interfaces';
import { TableRow } from '../table-row/table-row';
import { CarField } from '../car-field/car-field';

export class ScoreField extends BaseComponent {
  private currentPageNumber: number;

  private currentSortType: string;

  private currentSortOrder: string;

  winnersNumber?: number;

  private winnersTitle?: TextComponent;

  private pageTitle?: TextComponent;

  private scoreTable: HTMLTableElement;

  private tableHeader?: TableRow;

  readonly tableRows: TableRow[] = [];

  private winnersOnPage?: WinnerDataInterface[];

  constructor(
    currentPageNumber: number,
    currentSortType: string,
    currentSortOrder: string
  ) {
    super('div', ['score-field']);

    this.scoreTable = document.createElement('TABLE') as HTMLTableElement;
    this.currentPageNumber = currentPageNumber;
    this.currentSortType = currentSortType;
    this.currentSortOrder = currentSortOrder;

    WinnersDataService.getWinnersOnPageData(
      this.currentPageNumber,
      this.currentSortType,
      this.currentSortOrder
    )
      .then((winners) => {
        this.winnersNumber = winners.allWinnersNumber;
        this.winnersTitle = this.setWinnersTitle();
        this.pageTitle = this.setPageTitle();
        this.element.appendChild(this.winnersTitle.element);
        this.element.appendChild(this.pageTitle.element);
        this.winnersOnPage = winners.winnersOnPageData;

        this.tableHeader = new TableRow(TABLE_HEADER_CONTENT);
        this.scoreTable.appendChild(this.tableHeader.element);
        this.tableHeader.element.classList.add(CLASSES.tableHeaderRow);
        this.setTable();
        this.element.appendChild(this.scoreTable);
      })
      .catch((error) => {
        if (error.message === SERVER_ERROR.messageFromServer) {
          this.element.classList.add(SERVER_ERROR.messageToUserClassList);
          this.element.innerHTML = SERVER_ERROR.messageToUser;
        }
      });
  }

  private setWinnersTitle(): TextComponent {
    const winnersTitleText = TextComponent.createTextFromTemplate(
      TEXT_TEMPLATES.winnersTitle,
      [`${this.winnersNumber}`]
    );
    return new TextComponent(
      [TEXT_TEMPLATES.winnersTitle.className],
      winnersTitleText
    );
  }

  private setPageTitle(): TextComponent {
    const pageTitleText = TextComponent.createTextFromTemplate(
      TEXT_TEMPLATES.pageTitle,
      [this.currentPageNumber.toString()]
    );
    return new TextComponent(
      [TEXT_TEMPLATES.pageTitle.className],
      pageTitleText
    );
  }

  private setTable() {
    const indexShift = 1;
    this.winnersOnPage?.forEach((winner, winnerIndex) => {
      CarsDataService.getCarById(winner.id).then((car) => {
        const carElement = new CarField(car.color, car.id).element;
        carElement.classList.add(CLASSES.carScoreView);
        const content = [
          (winnerIndex + indexShift).toString(),
          carElement,
          car.name,
          winner.wins.toString(),
          winner.time.toString(),
        ];
        const newTableRow = new TableRow(content);
        this.tableRows.push(newTableRow);
        this.scoreTable.appendChild(newTableRow.element);
      });
    });
  }
}
