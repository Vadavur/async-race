import {} from '../shared/constants';
import { CarDataInterface } from '../shared/interfaces';

export class DataBaseService {
  public static getCarsNumber(): number {
    return 10;
  }

  public static getCarsOnPage(pageNumber: number): CarDataInterface[] {
    return [
      { name: 'AAAAA', color: '#abc123', id: 1 },
      { name: 'BBBBB', color: '#123abc', id: 2 },
    ];
  }
}
