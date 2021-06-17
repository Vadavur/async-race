import './track-section.scss';
import { BaseComponent } from '../shared/base-component';
import { CarDataInterface } from '../shared/interfaces';
import { CarControlPanel } from '../car-control-panel/car-control-panel';
import { TrackLine } from '../track-line/track-line';
import { DataControlService } from '../services/data-control-service';

export class TrackSection extends BaseComponent {
  readonly trackId: number;

  readonly carControlPanel: CarControlPanel;

  readonly trackLine: TrackLine;

  readonly carDataHandler: DataControlService;

  constructor(car: CarDataInterface) {
    super('div', ['track-section']);
    this.trackId = car.id;
    this.carControlPanel = new CarControlPanel(car.name);
    this.trackLine = new TrackLine(car.color, this.trackId);
    this.element.appendChild(this.carControlPanel.element);
    this.element.appendChild(this.trackLine.element);
    this.carDataHandler = new DataControlService(
      this.carControlPanel.selectCarButton.element as HTMLButtonElement,
      this.carControlPanel.removeCarButton.element as HTMLButtonElement,
      this.trackId
    );
  }
}
