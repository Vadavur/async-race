import {
  BASE_URL,
  URL_PATHS,
  GARAGE_PAGE,
  TRACK_LINES_PAGE_LIMIT,
} from '../shared/constants';
import { CarDataInterface } from '../shared/interfaces';

export class DataBaseService {
  public static async getCarsNumber(): Promise<number> {
    const allCarsArray = await DataBaseService.getAllCars();
    return allCarsArray.length;
  }

  public static async getCarsOnPageData(
    pageNumber: number
  ): Promise<{ carsOnPageData: CarDataInterface[]; allCarsNumber: number }> {
    const request = DataBaseService.createUrlRequest(URL_PATHS.garage, [
      [TRACK_LINES_PAGE_LIMIT.queryParam, `${TRACK_LINES_PAGE_LIMIT.number}`],
      [GARAGE_PAGE.queryParam, `${pageNumber}`],
    ]);
    const response = await fetch(request);
    const carsOnPageData = await response.json();
    const allCarsNumber = response.headers.get(
      GARAGE_PAGE.totalCarsNumberHeader
    );
    return {
      carsOnPageData,
      allCarsNumber: +(allCarsNumber as string),
    };
  }

  public static async getAllCars(): Promise<CarDataInterface[]> {
    const response = await fetch(`${BASE_URL}/${URL_PATHS.garage}`);
    const allCarsData = await response.json();
    return allCarsData;
  }

  private static createUrlRequest(urlPath: string, params: string[][]): string {
    const url = `${BASE_URL}/${urlPath}`;
    const paramNameIndex = 0;
    const paramValueIndex = 1;
    const queryParams = params.reduce((queryLine: string, param: string[]) => {
      return `${queryLine}${param[paramNameIndex]}=${param[paramValueIndex]}&`;
    }, '');
    return `${url}?${queryParams}`;
  }
}

// let element = document.querySelector(".moveable");
// let htmlBody = document.querySelector(".page");

// const getCarById = async (id: number) => {
//   const response = await fetch(`${BASE_URL}/${URL_PATHS.garage}/${id}`);
//   const carData = await response.json();
//   return carData;
// };

// const showCarById = async (id) => {
//   const carData = await getCarById(id);
//   element.innerHTML = carData;
// };

// const getAllCars = async () => {
//   const response = await fetch(`${BASE_URL}/${URL_PATHS.garage}`);
//   const allCarsData = await response.json();
//   return allCarsData[0].name;
// };

// const showAllCars = async () => {
//   const allCarsData = await getAllCars();
//   const newElement = document.createElement("div");
//   newElement.classList.add("cars-list");
//   newElement.innerHTML = allCarsData;
//   htmlBody.appendChild(newElement);
// };

// element.addEventListener("click", () => {
//   showCarById(2);
// });

// htmlBody.addEventListener("click", (event) => {
//   if (event.target !== element) {
//     showAllCars();
//   }
// });

// let start = null;
// function step(timestamp) {
//   if (!start) start = timestamp;
//   let progress = timestamp - start;
//   element.style.transform =
//     "translateX(" + Math.min(progress / 10, 200) + "px)";
//   if (progress < 2000) {
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);
