import { TABLE_HEADER, QUERIES, INITIAL_VALUES } from '../shared/constants';
import type { ScoreField } from '../score-field/score-field';

export class ScoreControlService {
  static currentSortType = INITIAL_VALUES.sortType;

  static currentSortOrder = INITIAL_VALUES.sortOrder;

  public static setScoreTableHeader(scoreField: ScoreField): void {
    scoreField.tableHeader.element.addEventListener('click', (event) => {
      const targetAttributeValue = (event?.target as HTMLElement).getAttribute(
        TABLE_HEADER.attribute.name
      );
      if (targetAttributeValue) {
        if (this.currentSortType === targetAttributeValue) {
          this.toggleSortOrder();
        } else {
          this.currentSortType = targetAttributeValue;
        }
        scoreField.refreshTable();
      }
    });
  }

  private static toggleSortOrder() {
    const currentOrder = this.currentSortOrder;
    if (currentOrder === QUERIES.winners.sortOrder.value.ascend) {
      this.currentSortOrder = QUERIES.winners.sortOrder.value.descend;
    } else {
      this.currentSortOrder = QUERIES.winners.sortOrder.value.ascend;
    }
  }
}
