import './track-section.scss';
import { BaseComponent } from '../shared/base-component';
import { CarDataInterface } from '../shared/interfaces';
import { CarControlPanel } from '../car-control-panel/car-control-panel';
import { TrackLine } from '../track-line/track-line';

export class TrackSection extends BaseComponent {
  private readonly trackId: number;

  private readonly carControlPanel: CarControlPanel;

  private readonly trackLine: TrackLine;

  constructor(car: CarDataInterface) {
    super('div', ['track-section']);
    this.trackId = car.id;
    this.carControlPanel = new CarControlPanel(car.name);
    this.trackLine = new TrackLine(car.color);
    this.element.appendChild(this.carControlPanel.element);
    this.element.appendChild(this.trackLine.element);
  }

  plugMethod(): void {
    console.log(this.element, 'remove this plug flag');
  }
}
