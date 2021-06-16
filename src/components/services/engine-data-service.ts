import { DataBaseService } from '../shared/data-base-service';
import { URL_PATHS } from '../shared/constants';
import { RaceData } from '../shared/interfaces';

export class EngineDataService extends DataBaseService {
  public static async getRaceData(id: number): Promise<RaceData> {
    const engineIdRequestParamName = 'id';
    const engineStartRequestParam = { name: 'status', value: 'started' };
    const request = this.createUrlRequest(URL_PATHS.engine, [
      [engineIdRequestParamName, `${id}`],
      [engineStartRequestParam.name, engineStartRequestParam.value],
    ]);
    const response = await fetch(request);
    const raceData = await response.json();

    return raceData;
  }

  public static async getRaceStatus(id: number): Promise<string> {
    const engineIdRequestParamName = 'id';
    const engineStatusRequestParam = { name: 'status', value: 'drive' };
    const request = this.createUrlRequest(URL_PATHS.engine, [
      [engineIdRequestParamName, `${id}`],
      [engineStatusRequestParam.name, engineStatusRequestParam.value],
    ]);
    const response = await fetch(request);
    const result = await response.json();

    return result;
  }
}
