export const AR_GAME = { title: 'Async RACE', name: 'async-race' };

export const BUTTONS = {
  toGarage: {
    label: 'garage'.toUpperCase(),
    className: 'btn_garage',
  },
  toWinners: {
    label: 'winners'.toUpperCase(),
    className: 'btn_winners',
  },
  createCar: {
    label: 'create'.toUpperCase(),
    className: 'btn_creation',
  },
  updateCar: {
    label: 'update'.toUpperCase(),
    className: 'btn_update',
  },
  startRace: {
    label: 'race'.toUpperCase(),
    className: 'btn_race',
  },
  resetGarage: {
    label: 'reset'.toUpperCase(),
    className: 'btn_reset',
  },
  generateCars: {
    label: 'generate cars'.toUpperCase(),
    className: 'btn_generation',
  },
  selectCar: {
    label: 'select'.toUpperCase(),
    className: 'btn_selection',
  },
  removeCar: {
    label: 'remove'.toUpperCase(),
    className: 'btn_removal',
  },
  startCarTest: {
    label: 'start'.toUpperCase(),
    className: 'btn_test-on',
  },
  stopCarTest: {
    label: 'stop'.toUpperCase(),
    className: 'btn_test-off',
  },
  previousPage: {
    label: 'prev'.toUpperCase(),
    className: 'btn_previous-page',
  },
  nextPage: {
    label: 'next'.toUpperCase(),
    className: 'btn_next-page',
  },
};

export const END_RACE_MESSAGE = 'Race is over';

export const INPUTS_ATTRIBUTES = {
  createCarName: {
    type: 'text',
    placeholder: 'Car make and model',
    name: 'car-name-create',
    required: '',
    pattern: `/^[^ ]+ [^ ]+/`,
    onInvalidValueText: `This input field should contain car make and model devided by space`,
  },
  updateCarName: {
    type: 'text',
    placeholder: 'Car make and model',
    name: 'car-name-update',
    pattern: `/^[^ ]+ [^ ]+/`,
    onInvalidValueText: `This input field should contain car make and model devided by space`,
  },
  createCarColor: {
    type: 'color',
    name: 'car-color-create',
    required: '',
  },
  updateCarColor: {
    type: 'color',
    name: 'car-color-update',
  },
};
