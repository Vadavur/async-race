import {} from '../shared/constants';
import { RaceField } from '../race-field/race-field';

export class GarageViewService {
  private readonly raceField: RaceField;

  constructor(raceField: RaceField) {
    this.raceField = raceField;
    console.log('remove this plug flag');
  }

  generateRaceField(): void {
    console.log(this.raceField.element);
    console.log('remove this plug flag');
  }
}
