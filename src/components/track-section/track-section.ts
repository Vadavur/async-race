import './track-section.scss';
import { BaseComponent } from '../shared/base-component';
import { CarDataInterface } from '../shared/interfaces';
import { RaceControlService } from '../services/race-control-service';
import { CarControlPanel } from '../car-control-panel/car-control-panel';
import { TrackLine } from '../track-line/track-line';

export class TrackSection extends BaseComponent {
  private readonly trackId: number;

  readonly carControlPanel: CarControlPanel;

  private readonly trackLine: TrackLine;

  readonly raceControlHandler: RaceControlService;

  constructor(car: CarDataInterface) {
    super('div', ['track-section']);
    this.trackId = car.id;
    this.carControlPanel = new CarControlPanel(car.name);
    this.trackLine = new TrackLine(car.color, this.trackId);
    this.element.appendChild(this.carControlPanel.element);
    this.element.appendChild(this.trackLine.element);
    this.raceControlHandler = new RaceControlService(
      this.trackLine.carField.element,
      this.trackLine.element,
      this.carControlPanel.startTestButton.element as HTMLButtonElement,
      this.carControlPanel.stopTestButton.element as HTMLButtonElement,
      this.trackId
    );
  }

  plugMethod(): void {
    console.log(this.element, 'remove this plug flag');
  }
}
