export interface TextComponentTemplateInterface {
  text: string;
  parameterFields: string[];
  className: string;
}

export interface CarDataInterface {
  name: string;
  color: string;
  id: number;
}

export interface RaceData {
  velocity: number;
  distance: number;
}

export interface CarsOnPageDataInterface {
  carsOnPageData: CarDataInterface[];
  allCarsNumber: number;
}

export interface WinnersOnPageDataInterface {
  winnersOnPageData: CarDataInterface[];
  allWinnersNumber: number;
}
