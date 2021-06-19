import './score-field.scss';
import { BaseComponent } from '../shared/base-component';
import { TextComponent } from '../shared/text-component/text-component';
import { WinnersDataService } from '../services/winners-data-service';
import { CarsDataService } from '../services/cars-data-service';
import {
  TEXT_TEMPLATES,
  SERVER_ERROR,
  TABLE_HEADER,
  CLASSES,
} from '../shared/constants';
import { WinnerDataInterface } from '../shared/interfaces';
import { TableRow } from '../table-row/table-row';
import { CarField } from '../car-field/car-field';
import { ScoreControlService } from '../services/score-control-service';

export class ScoreField extends BaseComponent {
  private currentPageNumber: number;

  winnersNumber?: number;

  private winnersTitle?: TextComponent;

  private pageTitle?: TextComponent;

  private scoreTable: HTMLTableElement;

  tableHeader: TableRow;

  readonly tableRows: TableRow[] = [];

  private winnersOnPage?: WinnerDataInterface[];

  constructor(currentPageNumber: number) {
    super('div', ['score-field']);

    this.scoreTable = document.createElement('TABLE') as HTMLTableElement;
    this.currentPageNumber = currentPageNumber;
    this.tableHeader = new TableRow(TABLE_HEADER.content);
    this.setTableHeader();
    this.scoreTable.appendChild(this.tableHeader.element);
    this.tableHeader.element.classList.add(CLASSES.tableHeaderRow);

    WinnersDataService.getWinnersOnPageData(
      this.currentPageNumber,
      ScoreControlService.currentSortType,
      ScoreControlService.currentSortOrder
    )
      .then((winners) => {
        this.winnersNumber = winners.allWinnersNumber;
        this.winnersTitle = this.setWinnersTitle();
        this.pageTitle = this.setPageTitle();
        this.element.appendChild(this.winnersTitle.element);
        this.element.appendChild(this.pageTitle.element);
        this.winnersOnPage = winners.winnersOnPageData;
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

  private setTableHeader() {
    this.tableHeader?.element.childNodes.forEach((td, index) => {
      (td as HTMLElement).setAttribute(
        TABLE_HEADER.attribute.name,
        TABLE_HEADER.attribute.values[index]
      );
    });
    ScoreControlService.setScoreTableHeader(this);
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

  refreshTable(): void {
    this.scoreTable.innerHTML = '';
    this.scoreTable.appendChild(this.tableHeader.element);
    WinnersDataService.getWinnersOnPageData(
      this.currentPageNumber,
      ScoreControlService.currentSortType,
      ScoreControlService.currentSortOrder
    )
      .then((winners) => {
        this.winnersOnPage = winners.winnersOnPageData;
        this.setTable();
      })
      .catch((error) => {
        if (error.message === SERVER_ERROR.messageFromServer) {
          this.element.classList.add(SERVER_ERROR.messageToUserClassList);
          this.element.innerHTML = SERVER_ERROR.messageToUser;
        }
      });
  }
}
