import {} from '../shared/constants';
import { GarageField } from '../garage-field/garage-field';

export class GarageService {
  private readonly garageField: GarageField;

  constructor(garageField: GarageField) {
    this.garageField = garageField;
    console.log('remove this plug flag');
  }
}
