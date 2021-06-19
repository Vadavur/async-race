import { DataBaseService } from './data-base-service';
import { WinnersDataService } from './winners-data-service';
import { URL_PATHS, QUERIES } from '../shared/constants';
import {
  CarsOnPageDataInterface,
  CarDataInterface,
} from '../shared/interfaces';

export class CarsDataService extends DataBaseService {
  public static async getCarsOnPageData(
    pageNumber: number
  ): Promise<CarsOnPageDataInterface> {
    const request = this.createUrlRequest(URL_PATHS.garage, [
      [QUERIES.garage.pageLimit.parameter, `${QUERIES.garage.pageLimit.value}`],
      [QUERIES.garage.pageNumber.parameter, `${pageNumber}`],
    ]);
    const response = await fetch(request);
    const carsOnPageData = await response.json();
    const allCarsNumber = response.headers.get(
      QUERIES.garage.pageNumber.totalCarsNumberHeader
    );

    return {
      carsOnPageData,
      allCarsNumber: +(allCarsNumber as string),
    };
  }

  public static async getCarById(id: number): Promise<CarDataInterface> {
    const request = this.createUrlRequest(`${URL_PATHS.garage}/${id}`, []);
    const response = await fetch(request, { method: 'GET' });

    return response.json();
  }

  public static async createCar(dataParams: BodyInit): Promise<Response> {
    const carCreateHeader = {
      'Content-Type': 'application/json',
    };
    const request = this.createUrlRequest(URL_PATHS.garage, []);
    const response = await fetch(request, {
      method: 'POST',
      body: dataParams,
      headers: carCreateHeader,
    });

    return response.json();
  }

  public static async updateCar(
    id: number,
    dataParams: BodyInit
  ): Promise<Response> {
    const carUpdateHeader = {
      'Content-Type': 'application/json',
    };
    const request = this.createUrlRequest(`${URL_PATHS.garage}/${id}`, []);
    const response = await fetch(request, {
      method: 'PUT',
      body: dataParams,
      headers: carUpdateHeader,
    });

    return response.json();
  }

  public static async removeCar(id: number): Promise<Response> {
    const request = this.createUrlRequest(`${URL_PATHS.garage}/${id}`, []);
    const response = await fetch(request, { method: 'DELETE' });
    await WinnersDataService.updateScoreOnCarRemove(id);
    return response;
  }
}
