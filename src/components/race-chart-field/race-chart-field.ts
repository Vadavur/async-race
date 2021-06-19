import './race-chart-field.scss';
import { BaseComponent } from '../shared/base-component';
import {
  BROKEN_ENGINE_FLAG,
  BUTTONS,
  TEXT_TEMPLATES,
} from '../shared/constants';
import { ButtonComponent } from '../shared/button-component/button-component';
import { TextComponent } from '../shared/text-component/text-component';
import { CarsDataService } from '../services/cars-data-service';

export class RaceChartField extends BaseComponent {
  popupBackground: HTMLDivElement;

  chartList: HTMLUListElement;

  readonly closeButton: ButtonComponent;

  constructor(raceIdChart: { carId: number; finishTime: number }[]) {
    super('div', ['race-chart-field']);
    this.popupBackground = document.createElement('DIV') as HTMLDivElement;
    this.popupBackground.classList.add('race-chart-field__window');
    this.chartList = document.createElement('UL') as HTMLUListElement;
    this.setChartList(raceIdChart);
    this.closeButton = new ButtonComponent(
      [BUTTONS.closeChart.className],
      BUTTONS.closeChart.label
    );
    this.popupBackground.appendChild(this.chartList);
    this.popupBackground.appendChild(this.closeButton.element);
    this.element.appendChild(this.popupBackground);
  }

  setChartList(raceIdChart: { carId: number; finishTime: number }[]): void {
    raceIdChart.forEach((chartMember, index) => {
      const indexShift = 1;
      const newListItem = document.createElement('LI');
      CarsDataService.getCarById(chartMember.carId).then((car) => {
        if (chartMember.finishTime !== BROKEN_ENGINE_FLAG) {
          newListItem.innerText = TextComponent.createTextFromTemplate(
            TEXT_TEMPLATES.chartListItemWinner,
            [
              `${index + indexShift}`,
              car.name,
              `${chartMember.carId}`,
              `${chartMember.finishTime}`,
            ]
          );
        } else {
          newListItem.innerText = TextComponent.createTextFromTemplate(
            TEXT_TEMPLATES.chartListItemLoser,
            [`${index + indexShift}`, car.name, `${chartMember.carId}`]
          );
        }
      });
      this.chartList.appendChild(newListItem);
    });
  }
}
