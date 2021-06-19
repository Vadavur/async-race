import { DataBaseService } from './data-base-service';
import { URL_PATHS, QUERIES, CUSTOM_EVENTS } from '../shared/constants';
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

  public static async getAllWinners(): Promise<WinnerDataInterface[]> {
    const request = this.createUrlRequest(URL_PATHS.winners, []);
    const response = await fetch(request);
    const allWinnersData = await response.json();

    return allWinnersData;
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

  static async updateScoreOnWin(raceWinnerResult: {
    carId: number;
    finishTime: number;
  }): Promise<void> {
    const firstWinValue = 1;
    const currentWinner = await this.getWinnerIfExists(raceWinnerResult.carId);
    if (currentWinner) {
      const requestBody = {
        wins: ++currentWinner.wins,
        time: currentWinner.time,
      };
      if (currentWinner.time > raceWinnerResult.finishTime) {
        requestBody.time = raceWinnerResult.finishTime;
      }
      const bodyInit = JSON.stringify(requestBody);
      console.log(requestBody);
      console.log(bodyInit);
      await this.updateWinner(currentWinner.id, bodyInit);
      document.dispatchEvent(
        new CustomEvent(CUSTOM_EVENTS.refreshWinnersPage, {
          detail: CUSTOM_EVENTS.refreshWinnersPage,
        })
      );
    } else {
      const bodyInit = JSON.stringify({
        id: raceWinnerResult.carId,
        wins: firstWinValue,
        time: raceWinnerResult.finishTime,
      });
      await this.createWinner(bodyInit);
      document.dispatchEvent(
        new CustomEvent(CUSTOM_EVENTS.refreshWinnersPage, {
          detail: CUSTOM_EVENTS.refreshWinnersPage,
        })
      );
    }
  }

  static async getWinnerIfExists(
    id: number
  ): Promise<WinnerDataInterface | undefined> {
    const allWinners = await this.getAllWinners();
    const currentWinner = allWinners.find((winner) => winner.id === id);
    return currentWinner;
  }

  static async updateScoreOnCarRemove(carId: number): Promise<void> {
    const currentWinner = await this.getWinnerIfExists(carId);
    if (currentWinner) {
      await this.removeWinner(carId);
      document.dispatchEvent(
        new CustomEvent(CUSTOM_EVENTS.refreshAllPages, {
          detail: CUSTOM_EVENTS.refreshAllPages,
        })
      );
    }
  }
}
