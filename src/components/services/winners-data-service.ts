import { DataBaseService } from '../shared/data-base-service';
import {
  URL_PATHS,
  GARAGE_PAGE,
  TRACK_LINES_PAGE_LIMIT,
} from '../shared/constants';
import { WinnersOnPageDataInterface } from '../shared/interfaces';

export class WinnersDataService extends DataBaseService {
  public static async getWinnersOnPageData(
    pageNumber: number
  ): Promise<WinnersOnPageDataInterface> {
    const request = this.createUrlRequest(URL_PATHS.garage, [
      [TRACK_LINES_PAGE_LIMIT.queryParam, `${TRACK_LINES_PAGE_LIMIT.number}`],
      [GARAGE_PAGE.queryParam, `${pageNumber}`],
    ]);
    const response = await fetch(request);
    const winnersOnPageData = await response.json();
    const allWinnersNumber = response.headers.get(
      GARAGE_PAGE.totalCarsNumberHeader
    );

    return {
      winnersOnPageData,
      allWinnersNumber: +(allWinnersNumber as string),
    };
  }

  // public static async createCar(dataParams: BodyInit): Promise<Response> {
  //   const carCreateHeader = {
  //     'Content-Type': 'application/json',
  //   };
  //   const request = this.createUrlRequest(URL_PATHS.garage, []);
  //   const response = await fetch(request, {
  //     method: 'POST',
  //     body: dataParams,
  //     headers: carCreateHeader,
  //   });

  //   return response.json();
  // }

  // public static async updateCar(
  //   id: number,
  //   dataParams: BodyInit
  // ): Promise<Response> {
  //   const carUpdateRequestParam = 'id';
  //   const carUpdateHeader = {
  //     'Content-Type': 'application/json',
  //   };
  //   const request = this.createUrlRequest(URL_PATHS.garage, [
  //     [carUpdateRequestParam, `${id}`],
  //   ]);
  //   const response = await fetch(request, {
  //     method: 'PUT',
  //     body: dataParams,
  //     headers: carUpdateHeader,
  //   });

  //   return response.json();
  // }

  // public static async deleteCar(id: number): Promise<Response> {
  //   const carDeleteRequestParam = 'id';
  //   const request = this.createUrlRequest(URL_PATHS.garage, [
  //     [carDeleteRequestParam, `${id}`],
  //   ]);
  //   const response = await fetch(request, { method: 'DELETE' });

  //   return response;
  // }

  // public static async getAllCars(): Promise<CarDataInterface[]> {
  //   const response = await fetch(`${BASE_URL}/${URL_PATHS.garage}`);
  //   const allCarsData = await response.json();
  //   return allCarsData;
  // }
}
