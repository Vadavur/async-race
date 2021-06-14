import {} from '../shared/constants';
import { GarageField } from '../garage-field/garage-field';

export class RaceControlService {
  private readonly garageField: GarageField;

  constructor(garageField: GarageField) {
    this.garageField = garageField;
    console.log('remove this plug flag');
  }
}

// let start = null;
// let element = document.querySelector(".moveable");
// let htmlBody = document.querySelector(".page");

// const baseUrl = "http://localhost:3000";

// const paths = {
//   garage: "garage",
//   winners: "winners",
// };

// const getCarById = async (id) => {
//   const response = await fetch(`${baseUrl}/${paths.garage}/${id}`);
//   const carData = await response.json();
//   return carData;
// };

// const showCarById = async (id) => {
//   const carData = await getCarById(id);
//   element.innerHTML = carData;
// };

// const getAllCars = async () => {
//   const response = await fetch(`${baseUrl}/${paths.garage}`);
//   const allCarsData = await response.json();
//   console.log(allCarsData[0].name);
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
