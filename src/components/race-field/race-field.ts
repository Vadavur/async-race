import './race-field.scss';
import { BaseComponent } from '../shared/base-component';
import { TextComponent } from '../shared/text-component/text-component';
import { CarsDataService } from '../services/cars-data-service';
import { RaceControlService } from '../services/race-control-service';
import { TEXT_TEMPLATES, SERVER_ERROR } from '../shared/constants';
import { CarDataInterface } from '../shared/interfaces';
import { TrackSection } from '../track-section/track-section';

export class RaceField extends BaseComponent {
  private currentPageNumber: number;

  private carsNumber?: number;

  private garageTitle?: TextComponent;

  private pageTitle?: TextComponent;

  readonly trackSections: TrackSection[] = [];

  private carsOnTrack?: CarDataInterface[];

  constructor(currentPageNumber: number) {
    super('div', ['race-field']);
    this.currentPageNumber = currentPageNumber;

    CarsDataService.getCarsOnPageData(this.currentPageNumber)
      .then((result) => {
        this.carsNumber = result.allCarsNumber;
        this.garageTitle = this.setGarageTitle();
        this.pageTitle = this.setPageTitle();
        this.element.appendChild(this.garageTitle.element);
        this.element.appendChild(this.pageTitle.element);
        this.carsOnTrack = result.carsOnPageData;
        this.setTrackSections();
      })
      .catch((error) => {
        if (error.message === SERVER_ERROR.messageFromServer) {
          this.element.classList.add(SERVER_ERROR.messageToUserClassList);
          this.element.innerHTML = SERVER_ERROR.messageToUser;
        }
      });
  }

  private setGarageTitle(): TextComponent {
    const garageTitleText = TextComponent.createTextFromTemplate(
      TEXT_TEMPLATES.garageTitle,
      [`${this.carsNumber}`]
    );
    return new TextComponent(
      [TEXT_TEMPLATES.garageTitle.className],
      garageTitleText
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

  private setTrackSections() {
    RaceControlService.raceControlHandlers = [];
    this.carsOnTrack?.forEach((car) => {
      const trackSection = new TrackSection(car);
      RaceControlService.raceControlHandlers.push(
        new RaceControlService(
          trackSection.trackLine.carField.element,
          trackSection.trackLine.element,
          trackSection.carControlPanel.startTestButton
            .element as HTMLButtonElement,
          trackSection.carControlPanel.stopTestButton
            .element as HTMLButtonElement,
          trackSection.trackId
        )
      );
      this.trackSections.push(trackSection);
      this.element.appendChild(trackSection.element);
    });
  }
}
