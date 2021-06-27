import { BASE_URL } from '../shared/constants';

export class DataBaseService {
  static createUrlRequest(urlPath: string, params?: string[][] | null): string {
    const url = `${BASE_URL}/${urlPath}`;
    const paramNameIndex = 0;
    const paramValueIndex = 1;
    let queryParams = '';
    if (params) {
      queryParams = params.reduce((queryLine: string, param: string[]) => {
        return `${queryLine}${param[paramNameIndex]}=${param[paramValueIndex]}&`;
      }, '');
    }
    return `${url}?${queryParams}`;
  }
}
