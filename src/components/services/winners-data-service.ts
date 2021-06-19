import { DataBaseService } from './data-base-service';
import { URL_PATHS, QUERIES } from '../shared/constants';
import {
  WinnersOnPageDataInterface,
  WinnerDataInterface,
} from '../shared/interfaces';

export class WinnersDataService extends DataBaseService {
  public static async getWinnersOnPageData(
    pageNumber: number,
    sortType: string,
    sortOrder: string
  ): Promise<WinnersOnPageDataInterface> {
    const request = this.createUrlRequest(URL_PATHS.winners, [
      [
        QUERIES.winners.pageLimit.parameter,
        `${QUERIES.winners.pageLimit.value}`,
      ],
      [QUERIES.winners.pageNumber.parameter, `${pageNumber}`],
      [QUERIES.winners.sortType.parameter, `${sortType}`],
      [QUERIES.winners.sortOrder.parameter, `${sortOrder}`],
    ]);
    const response = await fetch(request);
    const winnersOnPageData = await response.json();
    const allWinnersNumber = response.headers.get(
      QUERIES.winners.pageNumber.totalWinnersNumberHeader
    );

    return {
      winnersOnPageData,
      allWinnersNumber: +(allWinnersNumber as string),
    };
  }

  public static async getWinnerById(id: number): Promise<WinnerDataInterface> {
    const request = this.createUrlRequest(`${URL_PATHS.winners}/${id}`, []);
    const response = await fetch(request, { method: 'GET' });

    return response.json();
  }

  public static async createWinner(dataParams: BodyInit): Promise<Response> {
    const carCreateHeader = {
      'Content-Type': 'application/json',
    };
    const request = this.createUrlRequest(URL_PATHS.winners, []);
    const response = await fetch(request, {
      method: 'POST',
      body: dataParams,
      headers: carCreateHeader,
    });

    return response.json();
  }

  public static async updateWinner(
    id: number,
    dataParams: BodyInit
  ): Promise<Response> {
    const carUpdateHeader = {
      'Content-Type': 'application/json',
    };
    const request = this.createUrlRequest(`${URL_PATHS.winners}/${id}`, []);
    const response = await fetch(request, {
      method: 'PUT',
      body: dataParams,
      headers: carUpdateHeader,
    });

    return response.json();
  }

  public static async removeWinner(id: number): Promise<Response> {
    const request = this.createUrlRequest(`${URL_PATHS.winners}/${id}`, []);
    const response = await fetch(request, { method: 'DELETE' });

    return response;
  }
}
