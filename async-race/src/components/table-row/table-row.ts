import './table-row.scss';
import { BaseComponent } from '../shared/base-component';
import { CLASSES } from '../shared/constants';

export class TableRow extends BaseComponent {
  constructor(tdContent: (string | HTMLElement)[]) {
    super('tr', ['table-row']);

    this.createRow(tdContent);
  }

  createRow(tdContent: (string | HTMLElement)[]): void {
    tdContent.forEach((content) => {
      const newTd = document.createElement('TD');
      newTd.classList.add(CLASSES.tableTd);
      if (typeof content === 'string') {
        newTd.innerText = content;
      } else {
        newTd.appendChild(content);
      }
      this.element.appendChild(newTd);
    });
  }
}
