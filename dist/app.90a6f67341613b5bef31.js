(() => {
  'use strict';
  var e,
    t = 'garage',
    n = 'engine',
    r = {
      toGarage: { label: 'garage'.toUpperCase(), className: 'btn_garage' },
      toWinners: { label: 'winners'.toUpperCase(), className: 'btn_winners' },
      createCar: { label: 'create'.toUpperCase(), className: 'btn_creation' },
      updateCar: { label: 'update'.toUpperCase(), className: 'btn_update' },
      startRace: { label: 'race'.toUpperCase(), className: 'btn_race' },
      resetGarage: { label: 'reset'.toUpperCase(), className: 'btn_reset' },
      generateCars: {
        label: 'generate cars'.toUpperCase(),
        className: 'btn_generation',
      },
      selectCar: { label: 'select'.toUpperCase(), className: 'btn_selection' },
      removeCar: { label: 'remove'.toUpperCase(), className: 'btn_removal' },
      startCarTest: { label: 'start'.toUpperCase(), className: 'btn_test-on' },
      stopCarTest: { label: 'stop'.toUpperCase(), className: 'btn_test-off' },
      previousPage: {
        label: 'prev'.toUpperCase(),
        className: 'btn_previous-page',
      },
      nextPage: { label: 'next'.toUpperCase(), className: 'btn_next-page' },
      closeChart: { label: 'ok'.toUpperCase(), className: 'btn_close-chart' },
    },
    a = 'refreshAllPages',
    o = '#000000',
    i = {
      type: 'text',
      placeholder: 'Car make and model',
      name: 'car-name-create',
      required: '',
      pattern: '/^[^ ]+ [^ ]+/',
      onInvalidValueText:
        'This input field should contain car make and model devided by space',
    },
    l = {
      type: 'text',
      placeholder: 'Car make and model',
      name: 'car-name-update',
      pattern: '/^[^ ]+ [^ ]+/',
      onInvalidValueText:
        'This input field should contain car make and model devided by space',
    },
    s = { type: 'color', name: 'car-color-create', required: '' },
    c = { type: 'color', name: 'car-color-update' },
    u = {
      text: '_position_. _carName_ (#_carId_) : _finalTime_ seconds',
      parameterFields: ['_position_', '_carName_', '_carId_', '_finalTime_'],
      className: 'txt_chart-list',
    },
    d = {
      text: "_position_. _carName_ (#_carId_) didn't make it...",
      parameterFields: ['_position_', '_carName_', '_carId_'],
      className: 'txt_chart-list',
    },
    p = {
      text: 'Garage (_carNumber_ cars)',
      parameterFields: ['_carNumber_'],
      className: 'txt_garage-title',
    },
    f = {
      text: 'Page #_pageNumber_',
      parameterFields: ['_pageNumber_'],
      className: 'txt_text-title',
    },
    m = 'Async RACE',
    h = 'page-field__game-title',
    C = 'txt_car-name',
    b = 'car-field_engine-wrecked',
    y = 'car-field_engine-on',
    g = { name: 'status', value: 'started' },
    v = { name: 'status', value: 'stopped' },
    T = 'started',
    S = 'stopped',
    _ = 'started',
    w = 'stopped',
    x = [
      {
        brand: 'Seat',
        models: [
          'Alhambra',
          'Altea',
          'Altea XL',
          'Arosa',
          'Cordoba',
          'Cordoba Vario',
          'Exeo',
          'Ibiza',
          'Ibiza ST',
          'Exeo ST',
          'Leon',
          'Leon ST',
          'Inca',
          'Mii',
          'Toledo',
        ],
      },
      {
        brand: 'Renault',
        models: [
          'Captur',
          'Clio',
          'Clio Grandtour',
          'Espace',
          'Express',
          'Fluence',
          'Grand Espace',
          'Grand Modus',
          'Grand Scenic',
          'Kadjar',
          'Kangoo',
          'Kangoo Express',
          'Koleos',
          'Laguna',
          'Laguna Grandtour',
          'Latitude',
          'Mascott',
          'Mégane',
          'Mégane CC',
          'Mégane Combi',
          'Mégane Grandtour',
          'Mégane Coupé',
          'Mégane Scénic',
          'Scénic',
          'Talisman',
          'Talisman Grandtour',
          'Thalia',
          'Twingo',
          'Wind',
          'Zoé',
        ],
      },
      {
        brand: 'Peugeot',
        models: [
          '1007',
          '107',
          '106',
          '108',
          '2008',
          '205',
          '205 Cabrio',
          '206',
          '206 CC',
          '206 SW',
          '207',
          '207 CC',
          '207 SW',
          '306',
          '307',
          '307 CC',
          '307 SW',
          '308',
          '308 CC',
          '308 SW',
          '309',
          '4007',
          '4008',
          '405',
          '406',
          '407',
          '407 SW',
          '5008',
          '508',
          '508 SW',
          '605',
          '806',
          '607',
          '807',
          'Bipper',
          'RCZ',
        ],
      },
      {
        brand: 'Dacia',
        models: [
          'Dokker',
          'Duster',
          'Lodgy',
          'Logan',
          'Logan MCV',
          'Logan Van',
          'Sandero',
          'Solenza',
        ],
      },
      {
        brand: 'Citroën',
        models: [
          'Berlingo',
          'C-Crosser',
          'C-Elissée',
          'C-Zero',
          'C1',
          'C2',
          'C3',
          'C3 Picasso',
          'C4',
          'C4 Aircross',
          'C4 Cactus',
          'C4 Coupé',
          'C4 Grand Picasso',
          'C4 Sedan',
          'C5',
          'C5 Break',
          'C5 Tourer',
          'C6',
          'C8',
          'DS3',
          'DS4',
          'DS5',
          'Evasion',
          'Jumper',
          'Jumpy',
          'Saxo',
          'Nemo',
          'Xantia',
          'Xsara',
        ],
      },
      {
        brand: 'Opel',
        models: [
          'Agila',
          'Ampera',
          'Antara',
          'Astra',
          'Astra cabrio',
          'Astra caravan',
          'Astra coupé',
          'Calibra',
          'Campo',
          'Cascada',
          'Corsa',
          'Frontera',
          'Insignia',
          'Insignia kombi',
          'Kadett',
          'Meriva',
          'Mokka',
          'Movano',
          'Omega',
          'Signum',
          'Vectra',
          'Vectra Caravan',
          'Vivaro',
          'Vivaro Kombi',
          'Zafira',
        ],
      },
      {
        brand: 'Alfa Romeo',
        models: [
          '145',
          '146',
          '147',
          '155',
          '156',
          '156 Sportwagon',
          '159',
          '159 Sportwagon',
          '164',
          '166',
          '4C',
          'Brera',
          'GTV',
          'MiTo',
          'Crosswagon',
          'Spider',
          'GT',
          'Giulietta',
          'Giulia',
        ],
      },
      {
        brand: 'Škoda',
        models: [
          'Favorit',
          'Felicia',
          'Citigo',
          'Fabia',
          'Fabia Combi',
          'Fabia Sedan',
          'Felicia Combi',
          'Octavia',
          'Octavia Combi',
          'Roomster',
          'Yeti',
          'Rapid',
          'Rapid Spaceback',
          'Superb',
          'Superb Combi',
        ],
      },
      {
        brand: 'Chevrolet',
        models: [
          'Alero',
          'Aveo',
          'Camaro',
          'Captiva',
          'Corvette',
          'Cruze',
          'Cruze SW',
          'Epica',
          'Equinox',
          'Evanda',
          'HHR',
          'Kalos',
          'Lacetti',
          'Lacetti SW',
          'Lumina',
          'Malibu',
          'Matiz',
          'Monte Carlo',
          'Nubira',
          'Orlando',
          'Spark',
          'Suburban',
          'Tacuma',
          'Tahoe',
          'Trax',
        ],
      },
      {
        brand: 'Porsche',
        models: [
          '911 Carrera',
          '911 Carrera Cabrio',
          '911 Targa',
          '911 Turbo',
          '924',
          '944',
          '997',
          'Boxster',
          'Cayenne',
          'Cayman',
          'Macan',
          'Panamera',
        ],
      },
      {
        brand: 'Honda',
        models: [
          'Accord',
          'Accord Coupé',
          'Accord Tourer',
          'City',
          'Civic',
          'Civic Aerodeck',
          'Civic Coupé',
          'Civic Tourer',
          'Civic Type R',
          'CR-V',
          'CR-X',
          'CR-Z',
          'FR-V',
          'HR-V',
          'Insight',
          'Integra',
          'Jazz',
          'Legend',
          'Prelude',
        ],
      },
      {
        brand: 'Subaru',
        models: [
          'BRZ',
          'Forester',
          'Impreza',
          'Impreza Wagon',
          'Justy',
          'Legacy',
          'Legacy Wagon',
          'Legacy Outback',
          'Levorg',
          'Outback',
          'SVX',
          'Tribeca',
          'Tribeca B9',
          'XV',
        ],
      },
      {
        brand: 'Mazda',
        models: [
          '121',
          '2',
          '3',
          '323',
          '323 Combi',
          '323 Coupé',
          '323 F',
          '5',
          '6',
          '6 Combi',
          '626',
          '626 Combi',
          'B-Fighter',
          'B2500',
          'BT',
          'CX-3',
          'CX-5',
          'CX-7',
          'CX-9',
          'Demio',
          'MPV',
          'MX-3',
          'MX-5',
          'MX-6',
          'Premacy',
          'RX-7',
          'RX-8',
          'Xedox 6',
        ],
      },
      {
        brand: 'Mitsubishi',
        models: [
          '3000 GT',
          'ASX',
          'Carisma',
          'Colt',
          'Colt CC',
          'Eclipse',
          'Fuso canter',
          'Galant',
          'Galant Combi',
          'Grandis',
          'L200',
          'L200 Pick up',
          'L200 Pick up Allrad',
          'L300',
          'Lancer',
          'Lancer Combi',
          'Lancer Evo',
          'Lancer Sportback',
          'Outlander',
          'Pajero',
          'Pajeto Pinin',
          'Pajero Pinin Wagon',
          'Pajero Sport',
          'Pajero Wagon',
          'Space Star',
        ],
      },
      {
        brand: 'Lexus',
        models: [
          'CT',
          'GS',
          'GS 300',
          'GX',
          'IS',
          'IS 200',
          'IS 250 C',
          'IS-F',
          'LS',
          'LX',
          'NX',
          'RC F',
          'RX',
          'RX 300',
          'RX 400h',
          'RX 450h',
          'SC 430',
        ],
      },
      {
        brand: 'Toyota',
        models: [
          '4-Runner',
          'Auris',
          'Avensis',
          'Avensis Combi',
          'Avensis Van Verso',
          'Aygo',
          'Camry',
          'Carina',
          'Celica',
          'Corolla',
          'Corolla Combi',
          'Corolla sedan',
          'Corolla Verso',
          'FJ Cruiser',
          'GT86',
          'Hiace',
          'Hiace Van',
          'Highlander',
          'Hilux',
          'Land Cruiser',
          'MR2',
          'Paseo',
          'Picnic',
          'Prius',
          'RAV4',
          'Sequoia',
          'Starlet',
          'Supra',
          'Tundra',
          'Urban Cruiser',
          'Verso',
          'Yaris',
          'Yaris Verso',
        ],
      },
      {
        brand: 'BMW',
        models: [
          'i3',
          'i8',
          'M3',
          'M4',
          'M5',
          'M6',
          'Rad 1',
          'Rad 1 Cabrio',
          'Rad 1 Coupé',
          'Rad 2',
          'Rad 2 Active Tourer',
          'Rad 2 Coupé',
          'Rad 2 Gran Tourer',
          'Rad 3',
          'Rad 3 Cabrio',
          'Rad 3 Compact',
          'Rad 3 Coupé',
          'Rad 3 GT',
          'Rad 3 Touring',
          'Rad 4',
          'Rad 4 Cabrio',
          'Rad 4 Gran Coupé',
          'Rad 5',
          'Rad 5 GT',
          'Rad 5 Touring',
          'Rad 6',
          'Rad 6 Cabrio',
          'Rad 6 Coupé',
          'Rad 6 Gran Coupé',
          'Rad 7',
          'Rad 8 Coupé',
          'X1',
          'X3',
          'X4',
          'X5',
          'X6',
          'Z3',
          'Z3 Coupé',
          'Z3 Roadster',
          'Z4',
          'Z4 Roadster',
        ],
      },
      {
        brand: 'Volkswagen',
        models: [
          'Amarok',
          'Beetle',
          'Bora',
          'Bora Variant',
          'Caddy',
          'Caddy Van',
          'Life',
          'California',
          'Caravelle',
          'CC',
          'Crafter',
          'Crafter Van',
          'Crafter Kombi',
          'CrossTouran',
          'Eos',
          'Fox',
          'Golf',
          'Golf Cabrio',
          'Golf Plus',
          'Golf Sportvan',
          'Golf Variant',
          'Jetta',
          'LT',
          'Lupo',
          'Multivan',
          'New Beetle',
          'New Beetle Cabrio',
          'Passat',
          'Passat Alltrack',
          'Passat CC',
          'Passat Variant',
          'Passat Variant Van',
          'Phaeton',
          'Polo',
          'Polo Van',
          'Polo Variant',
          'Scirocco',
          'Sharan',
          'T4',
          'T4 Caravelle',
          'T4 Multivan',
          'T5',
          'T5 Caravelle',
          'T5 Multivan',
          'T5 Transporter Shuttle',
          'Tiguan',
          'Touareg',
          'Touran',
        ],
      },
      {
        brand: 'Suzuki',
        models: [
          'Alto',
          'Baleno',
          'Baleno kombi',
          'Grand Vitara',
          'Grand Vitara XL-7',
          'Ignis',
          'Jimny',
          'Kizashi',
          'Liana',
          'Samurai',
          'Splash',
          'Swift',
          'SX4',
          'SX4 Sedan',
          'Vitara',
          'Wagon R+',
        ],
      },
      {
        brand: 'Mercedes-Benz',
        models: [
          '100 D',
          '115',
          '124',
          '126',
          '190',
          '190 D',
          '190 E',
          '200 - 300',
          '200 D',
          '200 E',
          '210 Van',
          '210 kombi',
          '310 Van',
          '310 kombi',
          '230 - 300 CE Coupé',
          '260 - 560 SE',
          '260 - 560 SEL',
          '500 - 600 SEC Coupé',
          'Trieda A',
          'A',
          'A L',
          'AMG GT',
          'Trieda B',
          'Trieda C',
          'C',
          'C Sportcoupé',
          'C T',
          'Citan',
          'CL',
          'CL',
          'CLA',
          'CLC',
          'CLK Cabrio',
          'CLK Coupé',
          'CLS',
          'Trieda E',
          'E',
          'E Cabrio',
          'E Coupé',
          'E T',
          'Trieda G',
          'G Cabrio',
          'GL',
          'GLA',
          'GLC',
          'GLE',
          'GLK',
          'Trieda M',
          'MB 100',
          'Trieda R',
          'Trieda S',
          'S',
          'S Coupé',
          'SL',
          'SLC',
          'SLK',
          'SLR',
          'Sprinter',
        ],
      },
      {
        brand: 'Saab',
        models: [
          '9-3',
          '9-3 Cabriolet',
          '9-3 Coupé',
          '9-3 SportCombi',
          '9-5',
          '9-5 SportCombi',
          '900',
          '900 C',
          '900 C Turbo',
          '9000',
        ],
      },
      {
        brand: 'Audi',
        models: [
          '100',
          '100 Avant',
          '80',
          '80 Avant',
          '80 Cabrio',
          '90',
          'A1',
          'A2',
          'A3',
          'A3 Cabriolet',
          'A3 Limuzina',
          'A3 Sportback',
          'A4',
          'A4 Allroad',
          'A4 Avant',
          'A4 Cabriolet',
          'A5',
          'A5 Cabriolet',
          'A5 Sportback',
          'A6',
          'A6 Allroad',
          'A6 Avant',
          'A7',
          'A8',
          'A8 Long',
          'Q3',
          'Q5',
          'Q7',
          'R8',
          'RS4 Cabriolet',
          'RS4/RS4 Avant',
          'RS5',
          'RS6 Avant',
          'RS7',
          'S3/S3 Sportback',
          'S4 Cabriolet',
          'S4/S4 Avant',
          'S5/S5 Cabriolet',
          'S6/RS6',
          'S7',
          'S8',
          'SQ5',
          'TT Coupé',
          'TT Roadster',
          'TTS',
        ],
      },
      {
        brand: 'Kia',
        models: [
          'Avella',
          'Besta',
          'Carens',
          'Carnival',
          'Cee`d',
          'Cee`d SW',
          'Cerato',
          'K 2500',
          'Magentis',
          'Opirus',
          'Optima',
          'Picanto',
          'Pregio',
          'Pride',
          'Pro Cee`d',
          'Rio',
          'Rio Combi',
          'Rio sedan',
          'Sephia',
          'Shuma',
          'Sorento',
          'Soul',
          'Sportage',
          'Venga',
        ],
      },
      {
        brand: 'Land Rover',
        models: [
          '109',
          'Defender',
          'Discovery',
          'Discovery Sport',
          'Freelander',
          'Range Rover',
          'Range Rover Evoque',
          'Range Rover Sport',
        ],
      },
      {
        brand: 'Dodge',
        models: [
          'Avenger',
          'Caliber',
          'Challenger',
          'Charger',
          'Grand Caravan',
          'Journey',
          'Magnum',
          'Nitro',
          'RAM',
          'Stealth',
          'Viper',
        ],
      },
      {
        brand: 'Chrysler',
        models: [
          '300 C',
          '300 C Touring',
          '300 M',
          'Crossfire',
          'Grand Voyager',
          'LHS',
          'Neon',
          'Pacifica',
          'Plymouth',
          'PT Cruiser',
          'Sebring',
          'Sebring Convertible',
          'Stratus',
          'Stratus Cabrio',
          'Town & Country',
          'Voyager',
        ],
      },
      {
        brand: 'Ford',
        models: [
          'Aerostar',
          'B-Max',
          'C-Max',
          'Cortina',
          'Cougar',
          'Edge',
          'Escort',
          'Escort Cabrio',
          'Escort kombi',
          'Explorer',
          'F-150',
          'F-250',
          'Fiesta',
          'Focus',
          'Focus C-Max',
          'Focus CC',
          'Focus kombi',
          'Fusion',
          'Galaxy',
          'Grand C-Max',
          'Ka',
          'Kuga',
          'Maverick',
          'Mondeo',
          'Mondeo Combi',
          'Mustang',
          'Orion',
          'Puma',
          'Ranger',
          'S-Max',
          'Sierra',
          'Street Ka',
          'Tourneo Connect',
          'Tourneo Custom',
          'Transit',
          'Transit',
          'Transit Bus',
          'Transit Connect LWB',
          'Transit Courier',
          'Transit Custom',
          'Transit kombi',
          'Transit Tourneo',
          'Transit Valnik',
          'Transit Van',
          'Transit Van 350',
          'Windstar',
        ],
      },
      { brand: 'Hummer', models: ['H2', 'H3'] },
      {
        brand: 'Hyundai',
        models: [
          'Accent',
          'Atos',
          'Atos Prime',
          'Coupé',
          'Elantra',
          'Galloper',
          'Genesis',
          'Getz',
          'Grandeur',
          'H 350',
          'H1',
          'H1 Bus',
          'H1 Van',
          'H200',
          'i10',
          'i20',
          'i30',
          'i30 CW',
          'i40',
          'i40 CW',
          'ix20',
          'ix35',
          'ix55',
          'Lantra',
          'Matrix',
          'Santa Fe',
          'Sonata',
          'Terracan',
          'Trajet',
          'Tucson',
          'Veloster',
        ],
      },
      {
        brand: 'Infiniti',
        models: ['EX', 'FX', 'G', 'G Coupé', 'M', 'Q', 'QX'],
      },
      {
        brand: 'Jaguar',
        models: [
          'Daimler',
          'F-Pace',
          'F-Type',
          'S-Type',
          'Sovereign',
          'X-Type',
          'X-type Estate',
          'XE',
          'XF',
          'XJ',
          'XJ12',
          'XJ6',
          'XJ8',
          'XJ8',
          'XJR',
          'XK',
          'XK8 Convertible',
          'XKR',
          'XKR Convertible',
        ],
      },
      {
        brand: 'Jeep',
        models: [
          'Cherokee',
          'Commander',
          'Compass',
          'Grand Cherokee',
          'Patriot',
          'Renegade',
          'Wrangler',
        ],
      },
      {
        brand: 'Nissan',
        models: [
          '100 NX',
          '200 SX',
          '350 Z',
          '350 Z Roadster',
          '370 Z',
          'Almera',
          'Almera Tino',
          'Cabstar E - T',
          'Cabstar TL2 Valnik',
          'e-NV200',
          'GT-R',
          'Insterstar',
          'Juke',
          'King Cab',
          'Leaf',
          'Maxima',
          'Maxima QX',
          'Micra',
          'Murano',
          'Navara',
          'Note',
          'NP300 Pickup',
          'NV200',
          'NV400',
          'Pathfinder',
          'Patrol',
          'Patrol GR',
          'Pickup',
          'Pixo',
          'Primastar',
          'Primastar Combi',
          'Primera',
          'Primera Combi',
          'Pulsar',
          'Qashqai',
          'Serena',
          'Sunny',
          'Terrano',
          'Tiida',
          'Trade',
          'Vanette Cargo',
          'X-Trail',
        ],
      },
      {
        brand: 'Volvo',
        models: [
          '240',
          '340',
          '360',
          '460',
          '850',
          '850 kombi',
          'C30',
          'C70',
          'C70 Cabrio',
          'C70 Coupé',
          'S40',
          'S60',
          'S70',
          'S80',
          'S90',
          'V40',
          'V50',
          'V60',
          'V70',
          'V90',
          'XC60',
          'XC70',
          'XC90',
        ],
      },
      {
        brand: 'Daewoo',
        models: [
          'Espero',
          'Kalos',
          'Lacetti',
          'Lanos',
          'Leganza',
          'Lublin',
          'Matiz',
          'Nexia',
          'Nubira',
          'Nubira kombi',
          'Racer',
          'Tacuma',
          'Tico',
        ],
      },
      {
        brand: 'Fiat',
        models: [
          '1100',
          '126',
          '500',
          '500L',
          '500X',
          '850',
          'Barchetta',
          'Brava',
          'Cinquecento',
          'Coupé',
          'Croma',
          'Doblo',
          'Doblo Cargo',
          'Doblo Cargo Combi',
          'Ducato',
          'Ducato Van',
          'Ducato Kombi',
          'Ducato Podvozok',
          'Florino',
          'Florino Combi',
          'Freemont',
          'Grande Punto',
          'Idea',
          'Linea',
          'Marea',
          'Marea Weekend',
          'Multipla',
          'Palio Weekend',
          'Panda',
          'Panda Van',
          'Punto',
          'Punto Cabriolet',
          'Punto Evo',
          'Punto Van',
          'Qubo',
          'Scudo',
          'Scudo Van',
          'Scudo Kombi',
          'Sedici',
          'Seicento',
          'Stilo',
          'Stilo Multiwagon',
          'Strada',
          'Talento',
          'Tipo',
          'Ulysse',
          'Uno',
          'X1/9',
        ],
      },
      {
        brand: 'MINI',
        models: [
          'Cooper',
          'Cooper Cabrio',
          'Cooper Clubman',
          'Cooper D',
          'Cooper D Clubman',
          'Cooper S',
          'Cooper S Cabrio',
          'Cooper S Clubman',
          'Countryman',
          'Mini One',
          'One D',
        ],
      },
      {
        brand: 'Rover',
        models: ['200', '214', '218', '25', '400', '414', '416', '620', '75'],
      },
      {
        brand: 'Smart',
        models: [
          'Cabrio',
          'City-Coupé',
          'Compact Pulse',
          'Forfour',
          'Fortwo cabrio',
          'Fortwo coupé',
          'Roadster',
        ],
      },
    ],
    P = function (e, t) {
      var n;
      void 0 === e && (e = 'div'),
        void 0 === t && (t = []),
        (this.element = document.createElement(e)),
        (n = this.element.classList).add.apply(n, t);
    },
    G =
      ((e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      }),
      function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      }),
    R = (function (e) {
      function t(t, n) {
        void 0 === n && (n = '');
        var r = e.call(this, 'button', t) || this;
        return (r.element.innerHTML = n.toUpperCase()), r;
      }
      return G(t, e), t;
    })(P),
    k = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    B = (function (e) {
      function t(t) {
        var n = e.call(this, 'input', ['input']) || this;
        return (
          Object.entries(t).forEach(function (e) {
            n.element.setAttribute(e[0], e[1]);
          }),
          n
        );
      }
      return k(t, e), t;
    })(P),
    E = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    A = (function (e) {
      function t(t, n, r) {
        var a = e.call(this, 'div', ['car-data-form']) || this;
        return (
          (a.carNameInput = new B(t)),
          (a.carColorInput = new B(n)),
          (a.submitButton = new R([r.className], r.label)),
          a.element.appendChild(a.carNameInput.element),
          a.element.appendChild(a.carColorInput.element),
          a.element.appendChild(a.submitButton.element),
          a
        );
      }
      return E(t, e), t;
    })(P),
    F = (function () {
      function e() {}
      return (
        (e.createUrlRequest = function (e, t) {
          var n = 'http://localhost:3000/' + e,
            r = '';
          return (
            t &&
              (r = t.reduce(function (e, t) {
                return '' + e + t[0] + '=' + t[1] + '&';
              }, '')),
            n + '?' + r
          );
        }),
        e
      );
    })(),
    O = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    L = function (e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function i(e) {
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function l(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(i, l);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    I = function (e, t) {
      var n,
        r,
        a,
        o,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: l(0), throw: l(1), return: l(2) }),
        'function' == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function l(o) {
        return function (l) {
          return (function (o) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; i; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (a =
                      2 & o[0]
                        ? r.return
                        : o[0]
                        ? r.throw || ((a = r.return) && a.call(r), 0)
                        : r.next) &&
                    !(a = a.call(r, o[1])).done)
                )
                  return a;
                switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return i.label++, { value: o[1], done: !1 };
                  case 5:
                    i.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                        (6 !== o[0] && 2 !== o[0])
                      )
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      i.label = o[1];
                      break;
                    }
                    if (6 === o[0] && i.label < a[1]) {
                      (i.label = a[1]), (a = o);
                      break;
                    }
                    if (a && i.label < a[2]) {
                      (i.label = a[2]), i.ops.push(o);
                      break;
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                o = t.call(e, i);
              } catch (e) {
                (o = [6, e]), (r = 0);
              } finally {
                n = a = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, l]);
        };
      }
    },
    N = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        O(t, e),
        (t.setEngineMode = function (e, t) {
          return L(this, void 0, void 0, function () {
            var r;
            return I(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (r = this.createUrlRequest(n, [
                      ['id', '' + e],
                      [t.name, t.value],
                    ])),
                    [4, fetch(r)]
                  );
                case 1:
                  return [4, a.sent().json()];
                case 2:
                  return [2, a.sent()];
              }
            });
          });
        }),
        (t.getCarResult = function (e) {
          return L(this, void 0, void 0, function () {
            var t, r;
            return I(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (t = { name: 'status', value: 'drive' }),
                    (r = this.createUrlRequest(n, [
                      ['id', '' + e],
                      [t.name, t.value],
                    ])),
                    [4, fetch(r)]
                  );
                case 1:
                  return [4, a.sent().json()];
                case 2:
                  return [2, a.sent()];
              }
            });
          });
        }),
        t
      );
    })(F),
    M = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    j = (function (e) {
      function t(t, n) {
        void 0 === n && (n = '');
        var r = e.call(this, 'p', t) || this;
        return (r.element.innerText = n), r;
      }
      return (
        M(t, e),
        (t.createTextFromTemplate = function (e, t) {
          var n = e.text;
          return (
            t.forEach(function (t, r) {
              var a = new RegExp(e.parameterFields[r]);
              n = n.replace(a, t);
            }),
            n
          );
        }),
        t
      );
    })(P),
    U = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    V = function (e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function i(e) {
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function l(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(i, l);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    X = function (e, t) {
      var n,
        r,
        a,
        o,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: l(0), throw: l(1), return: l(2) }),
        'function' == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function l(o) {
        return function (l) {
          return (function (o) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; i; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (a =
                      2 & o[0]
                        ? r.return
                        : o[0]
                        ? r.throw || ((a = r.return) && a.call(r), 0)
                        : r.next) &&
                    !(a = a.call(r, o[1])).done)
                )
                  return a;
                switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return i.label++, { value: o[1], done: !1 };
                  case 5:
                    i.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                        (6 !== o[0] && 2 !== o[0])
                      )
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      i.label = o[1];
                      break;
                    }
                    if (6 === o[0] && i.label < a[1]) {
                      (i.label = a[1]), (a = o);
                      break;
                    }
                    if (a && i.label < a[2]) {
                      (i.label = a[2]), i.ops.push(o);
                      break;
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                o = t.call(e, i);
              } catch (e) {
                (o = [6, e]), (r = 0);
              } finally {
                n = a = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, l]);
        };
      }
    },
    z = (function (e) {
      function n() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        U(n, e),
        (n.getCarsOnPageData = function (e) {
          return V(this, void 0, void 0, function () {
            var n, r, a, o;
            return X(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = this.createUrlRequest(t, [
                      ['_limit', '7'],
                      ['_page', '' + e],
                    ])),
                    [4, fetch(n)]
                  );
                case 1:
                  return [4, (r = i.sent()).json()];
                case 2:
                  return (
                    (a = i.sent()),
                    (o = r.headers.get('X-Total-Count')),
                    [2, { carsOnPageData: a, allCarsNumber: +o }]
                  );
              }
            });
          });
        }),
        (n.getCarById = function (e) {
          return V(this, void 0, void 0, function () {
            var t;
            return X(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = this.createUrlRequest('garage/' + e, [])),
                    [4, fetch(t, { method: 'GET' })]
                  );
                case 1:
                  return [2, n.sent().json()];
              }
            });
          });
        }),
        (n.createCar = function (e) {
          return V(this, void 0, void 0, function () {
            var n, r;
            return X(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (n = { 'Content-Type': 'application/json' }),
                    (r = this.createUrlRequest(t, [])),
                    [4, fetch(r, { method: 'POST', body: e, headers: n })]
                  );
                case 1:
                  return [2, a.sent().json()];
              }
            });
          });
        }),
        (n.updateCar = function (e, t) {
          return V(this, void 0, void 0, function () {
            var n, r;
            return X(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (n = { 'Content-Type': 'application/json' }),
                    (r = this.createUrlRequest('garage/' + e, [])),
                    [4, fetch(r, { method: 'PUT', body: t, headers: n })]
                  );
                case 1:
                  return [2, a.sent().json()];
              }
            });
          });
        }),
        (n.removeCar = function (e) {
          return V(this, void 0, void 0, function () {
            var t;
            return X(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = this.createUrlRequest('garage/' + e, [])),
                    [4, fetch(t, { method: 'DELETE' })]
                  );
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        }),
        n
      );
    })(F),
    D = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    W = (function (e) {
      function t(t) {
        var n = e.call(this, 'div', ['race-chart-field']) || this;
        return (
          (n.popupBackground = document.createElement('DIV')),
          n.popupBackground.classList.add('race-chart-field__window'),
          (n.chartList = document.createElement('UL')),
          n.setChartList(t),
          (n.closeButton = new R([r.closeChart.className], r.closeChart.label)),
          n.popupBackground.appendChild(n.chartList),
          n.popupBackground.appendChild(n.closeButton.element),
          n.element.appendChild(n.popupBackground),
          n
        );
      }
      return (
        D(t, e),
        (t.prototype.setChartList = function (e) {
          var t = this;
          e.forEach(function (e, n) {
            var r = document.createElement('LI'),
              a = ('' + 0.001 * Math.floor(e.finishTime)).slice(0, 6);
            z.getCarById(e.carId).then(function (t) {
              -1 !== e.finishTime
                ? (r.innerText = j.createTextFromTemplate(u, [
                    '' + (n + 1),
                    t.name,
                    '' + e.carId,
                    '' + a,
                  ]))
                : (r.innerText = j.createTextFromTemplate(d, [
                    '' + (n + 1),
                    t.name,
                    '' + e.carId,
                  ]));
            }),
              t.chartList.appendChild(r);
          });
        }),
        t
      );
    })(P),
    H = (function () {
      function e(e, t, n, r, a) {
        (this.carElement = e),
          (this.trackLineElement = t),
          (this.startTestButton = n),
          (this.stopTestButton = r),
          (this.carId = a),
          this.setTestControlButtons();
      }
      return (
        (e.setRaceControlButtons = function (e, t) {
          var n = this;
          (this.startRaceButton = e),
            (this.resetRaceButton = t),
            this.startRaceButton.addEventListener('click', function () {
              n.startRaceButton.setAttribute('disabled', ''), n.startRace();
            }),
            this.resetRaceButton.addEventListener('click', function () {
              n.startRaceButton.removeAttribute('disabled'), n.resetRace();
            });
        }),
        (e.startRace = function () {
          var e = this;
          (this.raceIdChart = []),
            (this.raceStatus = _),
            (this.activeCars = 0),
            this.raceControlHandlers.forEach(function (t) {
              e.activeCars++,
                t.startTestButton.setAttribute('disabled', ''),
                t.runEngine();
            });
        }),
        (e.resetRace = function () {
          (this.raceStatus = w),
            (this.activeCars = 0),
            this.raceControlHandlers.forEach(function (e) {
              e.startTestButton.removeAttribute('disabled'),
                e.stopTestButton.setAttribute('disabled', ''),
                e.stopTest();
            });
        }),
        (e.prototype.setTestControlButtons = function () {
          var e = this;
          this.startTestButton.addEventListener('click', function () {
            e.carElement.classList.remove(b), e.runEngine();
          }),
            this.stopTestButton.setAttribute('disabled', ''),
            this.stopTestButton.addEventListener('click', function () {
              e.stopTestButton.setAttribute('disabled', ''),
                e.startTestButton.removeAttribute('disabled'),
                e.stopTest();
            });
        }),
        (e.prototype.runEngine = function () {
          var t = this;
          this.startTestButton.setAttribute('disabled', ''),
            this.carElement.classList.remove(b),
            this.carElement.classList.add(y),
            this.carElement.setAttribute('engineStatus', T),
            N.setEngineMode(this.carId, g).then(function (n) {
              e.raceStatus === w &&
                t.stopTestButton.removeAttribute('disabled');
              var r = n.distance / n.velocity;
              t.runCar(r, N.getCarResult(t.carId));
            });
        }),
        (e.prototype.runCar = function (t, n) {
          var r = this,
            a = 0,
            o = this.carElement.offsetWidth,
            i = this.trackLineElement.offsetWidth - o,
            l = function (e) {
              a || (a = e);
              var n = (e - a) / t;
              (r.carElement.style.transform =
                'translateX(' + Math.min(n * i, i) + '%)'),
                n < 1
                  ? (r.requestId = requestAnimationFrame(l))
                  : (r.requestId && window.cancelAnimationFrame(r.requestId),
                    r.stopEngine());
            };
          window.requestAnimationFrame(l),
            n
              .then(function () {
                e.raceStatus === _ &&
                  (e.activeCars--,
                  e.putCarResultToChart(r.carId, t),
                  0 === e.activeCars && e.showRaceResult());
              })
              .catch(function () {
                e.raceStatus === _ &&
                  (e.activeCars--,
                  e.putCarResultToChart(r.carId, -1),
                  0 === e.activeCars && e.showRaceResult()),
                  r.requestId && window.cancelAnimationFrame(r.requestId),
                  r.carElement.getAttribute('engineStatus') === T &&
                    (r.carElement.classList.add(b), r.stopEngine());
              });
        }),
        (e.putCarResultToChart = function (e, t) {
          if (-1 === t || 0 === this.raceIdChart.length)
            this.raceIdChart.push({ carId: e, finishTime: t });
          else {
            var n = this.raceIdChart.findIndex(function (e) {
              return -1 === e.finishTime || e.finishTime > t;
            });
            -1 === n
              ? this.raceIdChart.push({ carId: e, finishTime: t })
              : this.raceIdChart.splice(n, 0, { carId: e, finishTime: t });
          }
        }),
        (e.showRaceResult = function () {
          var e = this,
            t = new W(this.raceIdChart);
          document.body.appendChild(t.element),
            t.closeButton.element.addEventListener('click', function () {
              e.resetRace(),
                t.element.remove(),
                e.startRaceButton.removeAttribute('disabled');
            });
        }),
        (e.prototype.stopEngine = function () {
          var t = this;
          N.setEngineMode(this.carId, v).then(function () {
            t.carElement.setAttribute('engineStatus', S),
              t.carElement.classList.remove(y),
              e.raceStatus === w &&
                t.startTestButton.removeAttribute('disabled');
          });
        }),
        (e.prototype.stopTest = function () {
          this.requestId && window.cancelAnimationFrame(this.requestId),
            this.carElement.getAttribute('engineStatus') === T &&
              this.stopEngine(),
            this.carElement.classList.remove(b),
            (this.carElement.style.transform = 'translateX(0)');
        }),
        (e.raceStatus = w),
        (e.activeCars = 0),
        (e.bestCar = { time: 0, id: '' }),
        (e.raceControlHandlers = []),
        e
      );
    })(),
    K = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    q = (function (e) {
      function t() {
        var t = e.call(this, 'div', ['race-control-panel']) || this;
        return (
          (t.startRaceButton = new R(
            [r.startRace.className],
            r.startRace.label
          )),
          (t.resetRaceButton = new R(
            [r.resetGarage.className],
            r.resetGarage.label
          )),
          (t.generateCarsButton = new R(
            [r.generateCars.className],
            r.generateCars.label
          )),
          t.setRaceControlButtons(),
          t.element.appendChild(t.startRaceButton.element),
          t.element.appendChild(t.resetRaceButton.element),
          t.element.appendChild(t.generateCarsButton.element),
          t
        );
      }
      return (
        K(t, e),
        (t.prototype.setRaceControlButtons = function () {
          H.setRaceControlButtons(
            this.startRaceButton.element,
            this.resetRaceButton.element
          );
        }),
        t
      );
    })(P),
    J = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    Z = (function (e) {
      function t(t) {
        var n = e.call(this, 'div', ['car-control-panel']) || this;
        return (
          (n.carName = new j([C], t)),
          (n.selectCarButton = new R(
            [r.selectCar.className],
            r.selectCar.label
          )),
          (n.removeCarButton = new R(
            [r.removeCar.className],
            r.removeCar.label
          )),
          (n.startTestButton = new R(
            [r.startCarTest.className],
            r.startCarTest.label
          )),
          (n.stopTestButton = new R(
            [r.stopCarTest.className],
            r.stopCarTest.label
          )),
          n.element.appendChild(n.carName.element),
          n.element.appendChild(n.selectCarButton.element),
          n.element.appendChild(n.removeCarButton.element),
          n.element.appendChild(n.startTestButton.element),
          n.element.appendChild(n.stopTestButton.element),
          n
        );
      }
      return J(t, e), t;
    })(P),
    Q = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    Y = (function (e) {
      function t(t, n) {
        var r = e.call(this, 'div', ['car-field']) || this;
        return (
          (r.engineStatus = S),
          (r.element.innerHTML =
            '<svg id="svg2" version="1.1" viewBox="0 0 960 476" inkscape:version="0.91 r13725">\n  <title id="title3968">Red Car - Top View</title>\n  <defs id="defs4">\n    <linearGradient id="linearGradient3759">\n      <stop id="stop3761" style="stop-color:#1a1a1a" offset="0"/>\n      <stop id="stop3763" style="stop-color:#000000;stop-opacity:0" offset="1"/>\n    </linearGradient>\n    <linearGradient id="linearGradient4149" y2="834.68" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="848.16" gradientTransform="translate(8.3085,-2.6518)" y1="842.3" x1="871.33"/>\n    <linearGradient id="linearGradient4153" y2="533.5" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="812.14" gradientTransform="matrix(.89332 0 0 .89332 80.349 365.15)" y1="537.5" x1="879.9"/>\n    <linearGradient id="linearGradient4155" y2="531.91" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="815.82" gradientTransform="translate(27.625,296.49)" y1="537.5" x1="879.9"/>\n    <linearGradient id="linearGradient4185" y2="834.68" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="848.16" gradientTransform="matrix(1,0,0,-1,8.3085,1452)" y1="842.3" x1="871.33"/>\n    <linearGradient id="linearGradient4187" y2="528.42" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="876.14" gradientTransform="matrix(1,0,0,-1,21.438,1151.5)" y1="528.36" x1="887.9"/>\n    <linearGradient id="linearGradient4189" y2="531.91" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="815.82" gradientTransform="matrix(1,0,0,-1,27.625,1152.9)" y1="537.5" x1="879.9"/>\n    <linearGradient id="linearGradient4191" y2="535.37" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="883.76" gradientTransform="matrix(1,0,0,-1,21.438,1151.5)" y1="542.4" x1="897.22"/>\n    <linearGradient id="linearGradient4193" y2="501.08" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="835.99" gradientTransform="matrix(1,0,0,-1,21.438,1151.5)" y1="552.05" x1="880.71"/>\n    <linearGradient id="linearGradient4195" y2="529.61" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="805.29" gradientTransform="matrix(.89332 0 0 -.89332 94.156 1087.8)" y1="528.36" x1="887.9"/>\n    <linearGradient id="linearGradient4197" y2="533.5" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="812.14" gradientTransform="matrix(.89332 0 0 -.89332 80.349 1084.2)" y1="537.5" x1="879.9"/>\n    <linearGradient id="linearGradient4199" y2="867.68" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="205.59" gradientTransform="matrix(.99043 -.13799 -.13799 -.99043 146.05 1483.3)" y1="873.14" x1="229.7"/>\n    <linearGradient id="linearGradient4201" y2="872.65" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="216.56" gradientTransform="matrix(.99043 -.13799 -.13799 -.99043 156.31 1482)" y1="873.06" x1="238.83"/>\n    <linearGradient id="linearGradient4203" y2="528.42" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="876.14" gradientTransform="translate(21.438,297.91)" y1="528.36" x1="887.9"/>\n    <linearGradient id="linearGradient4205" y2="535.37" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="883.76" gradientTransform="translate(21.438,297.91)" y1="542.4" x1="897.22"/>\n    <linearGradient id="linearGradient4207" y2="501.08" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="835.99" gradientTransform="translate(21.438,297.91)" y1="552.05" x1="880.71"/>\n    <linearGradient id="linearGradient4209" y2="529.61" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="805.29" gradientTransform="matrix(.89332 0 0 .89332 94.156 361.57)" y1="528.36" x1="887.9"/>\n    <linearGradient id="linearGradient4211" y2="867.68" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="205.59" gradientTransform="matrix(.99043 .13799 -.13799 .99043 146.05 -33.885)" y1="873.14" x1="229.7"/>\n    <linearGradient id="linearGradient4213" y2="872.65" xlink:href="#linearGradient3759" gradientUnits="userSpaceOnUse" x2="216.56" gradientTransform="matrix(.99043 .13799 -.13799 .99043 156.31 -32.603)" y1="873.06" x1="238.83"/>\n  </defs>\n  <g id="layer1" transform="translate(-52.937,-486.69)">\n    <g id="g3890">\n      <path id="path3855" style="stroke:#191919;stroke-width:14;fill-opacity:.99608" d="m610.52 493.69c-1.5086 0.009-4.7211 0.30491-6.4687 0.9375l-3.5 1.5 8.6562 35.938-124.81 0.28125c-2.4363 0.005-4.8876-0.014-7.3437-0.0312-4.912-0.0343-9.8649-0.10455-14.844-0.21875-7.2926-0.16728-14.669-0.41288-22.062-0.71875-0.39591-0.0164-0.79137-0.0457-1.1875-0.0625-14.932-0.63018-30.007-1.4917-45.031-2.4375-20.326-1.2827-40.52-2.7074-60.124-3.875-14.528-0.8653-28.732-1.5796-42.375-2-9.3692-0.28873-18.464-0.45655-27.25-0.40625-4.3158 0.0247-8.5678 0.0933-12.719 0.21875-4.1508 0.12546-8.3801 0.3553-12.656 0.65625-2.138 0.15047-4.2778 0.31024-6.4374 0.5-6.4689 0.5684-13.045 1.3214-19.594 2.1875-0.0101 0.001-0.0211-0.001-0.0312 0-4.3725 0.57858-8.7185 1.2255-13.062 1.9062-4.3439 0.68073-8.6734 1.3978-12.937 2.1562-4.2537 0.75662-8.4704 1.5654-12.594 2.375-0.01 0.002-0.0212-0.002-0.0312 0-2.0664 0.40586-4.0697 0.80417-6.0937 1.2188-6.0614 1.2416-11.934 2.516-17.5 3.7812-0.0101 0.002-0.0211-0.002-0.0312 0-3.7165 0.8449-7.2872 1.6752-10.719 2.5-6.8638 1.6484-13.115 3.2346-18.531 4.6562-8.1236 2.1325-14.382 3.9272-18.094 5-2.4736 0.71578-3.8125 1.125-3.8125 1.125l-13.687 3.75c-0.9024 0.24873-1.7781 0.6929-2.625 1.3125-0.28771 0.2105-0.56234 0.43593-0.84374 0.6875-1.0996 0.9796-2.151 2.2707-3.1562 3.8438-0.0046 0.007 0.0046 0.0243 0 0.0312-0.50036 0.78473-1.0225 1.6405-1.5 2.5625-0.0042 0.008 0.0042 0.0232 0 0.0312-0.47757 0.9237-0.95114 1.9142-1.4062 2.9688-0.0037 0.009 0.0037 0.0222 0 0.0312-3.667 8.5095-6.62 21.131-8.9374 36.219-0.0015 0.01 0.0015 0.0212 0 0.0312-0.03595 0.23416-0.0581 0.48342-0.09375 0.71875-0.50462 3.3315-0.99204 6.7982-1.4375 10.344-0.03048 0.24265-0.06355 0.47519-0.09375 0.71875-0.50157 4.0432-0.94672 8.2025-1.375 12.469-0.001 0.01 0.000999 0.0211 0 0.0312-0.21354 2.1284-0.42912 4.2948-0.62499 6.4688-0.000921 0.01 0.000921 0.0209 0 0.0312-0.19581 2.1743-0.38397 4.3492-0.56249 6.5625-0.000826 0.01 0.000825 0.0209 0 0.0312-0.35775 4.4376-0.67817 8.9458-0.96874 13.5-0.000656 0.0101 0.000655 0.0209 0 0.0312-0.8726 13.684-1.4596 27.789-1.7812 41.562-0.000245 0.0104 0.000244 0.0207 0 0.0312-0.21443 9.1894-0.3126 18.213-0.3126 26.907 0 0.96763 0.02755 1.9629 0.03125 2.9375-0.0037 0.97462-0.03125 1.9699-0.03125 2.9375 0 8.6932 0.09816 17.717 0.3125 26.906 0.000244 0.0105-0.000245 0.0208 0 0.0312 0.32165 13.774 0.90864 27.878 1.7812 41.562 0.000655 0.0103-0.000656 0.0211 0 0.0312 0.29057 4.5542 0.61099 9.0624 0.96874 13.5 0.000825 0.0103-0.000826 0.0211 0 0.0312 0.17852 2.2133 0.36668 4.3882 0.56249 6.5625 0.000921 0.0103-0.000921 0.0211 0 0.0312 0.19588 2.174 0.41145 4.3404 0.62499 6.4688 0.000999 0.0102-0.001 0.0211 0 0.0312 0.42826 4.2663 0.87342 8.4256 1.375 12.469 0.0302 0.24356 0.06327 0.4761 0.09375 0.71875 0.44545 3.5456 0.93287 7.0123 1.4375 10.344 0.03565 0.23533 0.0578 0.48459 0.09375 0.71875 0.0015 0.01-0.0015 0.0215 0 0.0312 2.3174 15.087 5.2704 27.709 8.9374 36.219 0.0037 0.009-0.0037 0.0226 0 0.0312 0.45509 1.0546 0.92866 2.045 1.4062 2.9688 0.0042 0.008-0.0042 0.0231 0 0.0312 0.47753 0.92204 0.99962 1.7778 1.5 2.5625 0.0046 0.007-0.0046 0.0242 0 0.0312 1.0052 1.5731 2.0566 2.8642 3.1562 3.8438 0.2814 0.25157 0.55603 0.477 0.84374 0.6875 0.84686 0.6196 1.7226 1.0638 2.625 1.3125l13.687 3.75s1.3388 0.40922 3.8125 1.125c3.7111 1.0728 9.97 2.8675 18.094 5 5.4157 1.4217 11.667 3.0078 18.531 4.6562 3.4314 0.82484 7.0022 1.6551 10.719 2.5 0.0102 0.002 0.0211-0.002 0.0312 0 5.5661 1.2652 11.438 2.5396 17.5 3.7812 2.024 0.41458 4.0273 0.81289 6.0937 1.2188 0.0101 0.002 0.0212-0.002 0.0312 0 4.1232 0.80965 8.3399 1.6184 12.594 2.375 4.264 0.75843 8.5935 1.4755 12.937 2.1562 4.3439 0.68073 8.6898 1.3277 13.062 1.9062 0.0102 0.001 0.0211-0.001 0.0312 0 6.5486 0.86611 13.125 1.6191 19.594 2.1875 2.1597 0.18976 4.2994 0.34953 6.4374 0.5 4.276 0.30095 8.5053 0.53079 12.656 0.65625 4.1508 0.12546 8.4028 0.19403 12.719 0.21875 8.7859 0.0503 17.881-0.11752 27.25-0.40625 13.642-0.42043 27.847-1.1347 42.375-2 19.604-1.1676 39.798-2.5923 60.124-3.875 15.024-0.94578 30.098-1.8073 45.031-2.4375 0.39612-0.0168 0.79158-0.0461 1.1875-0.0625 7.3934-0.30587 14.77-0.55147 22.062-0.71875 4.9787-0.1142 9.9316-0.18447 14.844-0.21875 2.456-0.0172 4.9073-0.0365 7.3437-0.0312l124.81 0.28125-8.6562 35.938 3.5 1.5c1.7476 0.63259 4.9601 0.92851 6.4687 0.9375 0.8486 0.005 1.7551-0.0741 2.6875-0.25 0.31069-0.0585 0.62352-0.14105 0.93749-0.21875 0.30459-0.0756 0.63258-0.15668 0.93749-0.25 0.62844-0.19306 1.2635-0.42156 1.875-0.6875 1.8215-0.79351 3.5342-1.9314 4.7812-3.3125 0.01-0.0107 0.0217-0.0206 0.0312-0.0312 0.6248-0.6979 1.1123-1.4512 1.4687-2.2812l12.156-31.312 109.94 0.25c0.7469 0.3739 1.4761 0.74511 2.2187 1.0938 2.9792 1.3995 5.911 2.597 8.8436 3.625 1.4623 0.51259 2.9178 0.97549 4.375 1.4062 5.1 1.5075 10.188 2.5515 15.344 3.25 2.9462 0.39932 5.9259 0.69388 8.9374 0.90625 1.5057 0.1061 3.034 0.18011 4.5624 0.25 3.057 0.13994 6.1386 0.21283 9.3124 0.25 6.3475 0.0741 12.979 0 20 0 10.41 0 20.322-0.53122 29.781-1.5625 3.7835-0.41251 7.4911-0.89749 11.125-1.4688 7.2676-1.1425 14.228-2.6189 20.906-4.375 1.6694-0.43903 3.3357-0.89874 4.9687-1.375 4.899-1.4288 9.6128-3.0254 14.187-4.7812 1.5248-0.58527 3.042-1.1605 4.5312-1.7812 2.9783-1.2414 5.882-2.557 8.7186-3.9375 1.4183-0.69027 2.8355-1.4006 4.2187-2.125 2.7664-1.4488 5.4668-2.98 8.0937-4.5625 1.3135-0.79125 2.5961-1.6135 3.875-2.4375 6.3943-4.1201 12.363-8.6255 17.906-13.531 4.4286-3.9195 8.6015-8.0798 12.5-12.469 0.005-0.006-0.005-0.0254 0-0.0312 0.97044-1.0929 1.937-2.1916 2.875-3.3125 0.005-0.006-0.005-0.0251 0-0.0312 0.93773-1.1209 1.8757-2.2578 2.7812-3.4062 0.005-0.006-0.005-0.0249 0-0.0312 2.7256-3.4582 5.3132-7.0189 7.7499-10.719 0.005-0.007-0.005-0.024 0-0.0312 0.80882-1.2286 1.6289-2.4644 2.4062-3.7188 0.005-0.008-0.005-0.0238 0-0.0312 2.3405-3.7781 4.5668-7.6525 6.6249-11.656 0.004-0.008-0.004-0.0231 0-0.0312 0.68299-1.3292 1.3477-2.6781 2-4.0312 0.004-0.008-0.004-0.0229 0-0.0312 0.65204-1.3533 1.316-2.7169 1.9375-4.0938 0.004-0.009-0.004-0.0227 0-0.0312 1.2464-2.7625 2.438-5.5517 3.5625-8.4062 0.004-0.009-0.004-0.0224 0-0.0312 0.56023-1.4229 1.0948-2.8674 1.625-4.3125 0.003-0.009-0.003-0.0222 0-0.0312 0.53002-1.4452 1.0623-2.908 1.5625-4.375 0.49999-1.4671 0.99842-2.949 1.4687-4.4375 0.003-0.009-0.003-0.022 0-0.0312 0.47013-1.4886 0.93435-2.9905 1.375-4.5 0.003-0.01-0.003-0.0217 0-0.0312 0.44045-1.5096 0.87009-3.0324 1.2812-4.5625 0.003-0.01-0.003-0.0217 0-0.0312 1.2381-4.6101 2.3684-9.306 3.3437-14.094v-0.0312c0.3236-1.5894 0.6112-3.2044 0.9063-4.8125v-0.0312c2.0747-11.318 3.4621-23.062 4.1562-35.219 0.0005-0.0103-0.0006-0.0211 0-0.0312 0.098-1.7279 0.1787-3.4757 0.25-5.2188 0.0004-0.0103-0.0004-0.0211 0-0.0312 0.1426-3.4969 0.2467-7.0072 0.2812-10.562 0-0.0103-0.0001-0.0211 0-0.0312 0.017-1.783 0.01-3.578 0-5.375 0-0.6358-0.022-1.2714-0.031-1.9062 0.01-0.63485 0.031-1.2704 0.031-1.9062 0.01-1.797 0.017-3.592 0-5.375-0.0001-0.0102 0-0.0209 0-0.0312-0.034-3.5553-0.1386-7.0656-0.2812-10.562-0.0004-0.0102 0.0004-0.0209 0-0.0312-0.071-1.7431-0.152-3.4908-0.25-5.2188-0.0006-0.0102 0.0005-0.0209 0-0.0312-0.6941-12.157-2.0815-23.9-4.1562-35.219v-0.0312c-0.2951-1.6081-0.5827-3.2231-0.9063-4.8125v-0.0312c-0.97539-4.7878-2.1056-9.4836-3.3437-14.094-0.003-0.01 0.003-0.0213 0-0.0312-0.41115-1.5301-0.84079-3.0529-1.2812-4.5625-0.003-0.01 0.003-0.0213 0-0.0312-0.44063-1.5095-0.90485-3.0114-1.375-4.5-0.003-0.009 0.003-0.0223 0-0.0312-0.47032-1.4885-0.96875-2.9704-1.4687-4.4375-0.50017-1.467-1.0325-2.9298-1.5625-4.375-0.003-0.009 0.003-0.0223 0-0.0312-0.53021-1.4451-1.0648-2.8896-1.625-4.3125-0.004-0.009 0.004-0.0223 0-0.0312-1.1244-2.8546-2.3161-5.6438-3.5625-8.4062-0.004-0.008 0.004-0.0223 0-0.0312-0.62148-1.3768-1.2854-2.7405-1.9375-4.0938-0.004-0.008 0.004-0.0233 0-0.0312-0.65224-1.3532-1.317-2.7021-2-4.0312-0.004-0.008 0.004-0.0233 0-0.0312-2.0582-4.0038-4.2844-7.8782-6.6249-11.656-0.005-0.007 0.005-0.0233 0-0.0312-0.77733-1.2543-1.5974-2.4902-2.4062-3.7188-0.005-0.007 0.005-0.0242 0-0.0312-2.4367-3.6999-5.0243-7.2606-7.7499-10.719-0.005-0.006 0.005-0.0253 0-0.0312-0.90549-1.1485-1.8435-2.2853-2.7812-3.4062-0.005-0.006 0.005-0.0253 0-0.0312-0.93801-1.1209-1.9045-2.2196-2.875-3.3125-0.005-0.006 0.005-0.0253 0-0.0312-3.8983-4.3889-8.0712-8.5493-12.5-12.469-5.543-4.9058-11.512-9.4112-17.906-13.531-1.2789-0.82402-2.5615-1.6462-3.875-2.4375-2.6269-1.5825-5.3273-3.1137-8.0937-4.5625-1.3832-0.72439-2.8004-1.4347-4.2187-2.125-2.8367-1.3806-5.7403-2.6961-8.7186-3.9375-1.4892-0.62071-3.0064-1.196-4.5312-1.7812-4.5746-1.7558-9.2883-3.3525-14.187-4.7812-1.633-0.47626-3.2993-0.93597-4.9687-1.375-6.6777-1.7561-13.638-3.2325-20.906-4.375-3.6338-0.57126-7.3414-1.0562-11.125-1.4688-9.4586-1.0326-19.371-1.5638-29.781-1.5638-7.0204 0-13.652-0.0741-20 0-3.1738 0.0372-6.2554 0.11006-9.3124 0.25-1.5285 0.0699-3.0568 0.1439-4.5624 0.25-3.0115 0.21237-5.9912 0.50693-8.9374 0.90625-5.1556 0.69849-10.244 1.7425-15.344 3.25-1.4572 0.43076-2.9127 0.89366-4.375 1.4062-2.9327 1.028-5.8645 2.2255-8.8436 3.625-0.74267 0.34864-1.4718 0.71985-2.2187 1.0938l-109.94 0.25-12.156-31.312c-0.35644-0.83-0.84393-1.5834-1.4687-2.2812-0.01-0.0105-0.0213-0.0206-0.0312-0.0312-1.247-1.3811-2.9597-2.519-4.7812-3.3125-0.61146-0.26594-1.2465-0.49444-1.875-0.6875-0.30491-0.0933-0.6329-0.1744-0.93749-0.25-0.31402-0.0777-0.62685-0.16025-0.93754-0.21875-0.9324-0.1759-1.8389-0.255-2.6875-0.25z"/>\n      <path id="car-body" style="fill-opacity:.99608;fill:#3278ff" d="m610.52 493.69c-1.5086 0.009-4.7211 0.30611-6.4687 0.9375l-3.5 1.5 8.6562 35.844-124.81 0.28125c-77.963 0.1654-166.52-11.504-232.93-9.5-66.412 2.0037-152.12 28-152.12 28l-13.687 3.7812c-19.251 5.2963-25.718 97.367-25.718 166.78 0 1.113 0.02665 2.2531 0.03125 3.375-0.0046 1.1219-0.03125 2.262-0.03125 3.375 0 69.414 6.4673 161.48 25.718 166.78l13.687 3.7812s85.711 25.996 152.12 28c66.412 2.0037 154.97-9.6654 232.93-9.5l124.81 0.28125-8.6562 35.844 3.5 1.5c1.7476 0.63139 4.96 0.92854 6.4687 0.9375 0.84859 0.005 1.7551-0.0744 2.6875-0.25 0.3107-0.0584 0.62352-0.14119 0.93749-0.21875 0.30459-0.0754 0.63259-0.15686 0.93749-0.25 0.62844-0.19269 1.2635-0.42206 1.875-0.6875 1.8215-0.79201 3.5342-1.9028 4.7812-3.2812 0.01-0.0107 0.0217-0.0208 0.0312-0.0312 0.6248-0.69658 1.1123-1.4528 1.4687-2.2812l12.156-31.25 109.94 0.25c23.9 11.942 45.511 10.719 73.593 10.719 133.25 0 187.63-86.586 187-201.38 0-0.7802-0.019-1.5656-0.031-2.3438 0.012-0.77811 0.031-1.5636 0.031-2.3438 0.6282-114.79-53.749-201.38-187-201.38-28.082 0-49.693-1.2236-73.593 10.719l-109.94 0.25-12.156-31.25c-0.35645-0.82844-0.84393-1.5847-1.4687-2.2812-0.01-0.0104-0.0213-0.0206-0.0312-0.0312-1.247-1.3785-2.9597-2.4892-4.7812-3.2812-0.61148-0.26544-1.2465-0.49481-1.875-0.6875-0.3049-0.0931-0.6329-0.1746-0.93749-0.25-0.31397-0.0776-0.62679-0.16035-0.93749-0.21875-0.93239-0.1756-1.8389-0.255-2.6875-0.25z"/>\n      <path id="path3643" style="opacity:.9;fill-opacity:.99608;fill:#262626" d="m400.34 855.24c-33.364 0-65.307 1.8-94.811 5.0625 25.66 48.714 97.985 30.265 205.56 31.531 49.686 0.58471 89.543 1.8793 121.53 2.375-47.16-23.334-133.53-38.969-232.28-38.969z"/>\n      <path id="path3658" style="opacity:.5;fill-opacity:.99608" d="m400.34 855.24c-3.2064 0-6.3831 0.0295-9.5624 0.0625 0.81825 16.171 6.4281 30.257 14.594 38.844 4.6714-0.0756 9.4951-0.19655 14.437-0.34375-8.5657-8.1923-14.593-22.228-15.719-38.562-1.2512-0.005-2.4947 0-3.75 0z"/>\n      <path class = "car-lights" id="right-car-light" style="block-progression:tb;text-indent:0;color:#000000;stroke:#191919;stroke-width:5;text-transform:none" d="m989.02 827.5-5.0937 0.59375c-21.545 2.5127-37.688 25.979-39.281 54.531l-0.37499 7.125 5.2499-4.8438c15.889-14.68 28.303-32.507 37.406-52.75l2.09-4.65z"/>\n      <path id="path3715" style="opacity:.5;stroke-linejoin:round;stroke:#292929;stroke-linecap:round;stroke-width:6;fill:none" d="m783.47 838.5s79.677-22.596 105.38-31.982c26.839-9.8018 98.859-39.146 98.859-39.146s-8.7409 42.47-30.483 57.918c-77.23 54.87-232.69 53.85-232.69 53.85"/>\n      <path id="path3757" style="fill:url(#linearGradient4149)" d="m869.97 817.84-4.4374 2.3438c0.98912 1.1568 1.7955 2.4286 2.375 3.8438 4.7979 11.717-10.736 29.236-26.875 35.781-0.51675 0.20958-1.8129 0.84066-3.4062 1.6562l13.625-3.875c17.306-8.4576 27.47-23.082 23-34-0.91615-2.2373-2.3752-4.1661-4.2812-5.75z"/>\n      <path id="path3787" style="fill:url(#linearGradient4203)" d="m878.55 813.38-4.4375 2.3438c0.98913 1.1568 1.7955 2.4286 2.375 3.8438 4.7979 11.717-10.736 29.236-26.875 35.781-0.51676 0.20958-1.8129 0.84066-3.4062 1.6562l13.625-3.875c17.306-8.4576 27.47-23.082 23-34-0.91615-2.2373-2.3752-4.1661-4.2812-5.75z"/>\n      <path id="path3752" style="fill:url(#linearGradient4155)" d="m884.74 811.96-4.4374 2.3438c0.98913 1.1568 1.7955 2.4286 2.375 3.8438 4.7979 11.717-10.736 29.236-26.875 35.781-0.51675 0.20958-1.8129 0.84066-3.4062 1.6562l13.625-3.875c17.306-8.4576 27.47-23.082 23-34-0.91615-2.2373-2.3752-4.1661-4.2812-5.75z"/>\n      <path id="path3735" style="fill:url(#linearGradient4205)" d="m901.65 807.69-6.1874 1.8438c0.96015 1.7128 1.6545 3.5323 2.0312 5.4688 3.1194 16.034-20.962 34.284-43.031 38.5-3.395 0.64864-28.884 8.576-32.158 8.8044v4.125l41.439-12.148c26.285-5.4963 44.949-22.448 41.875-38.25-0.59564-3.0616-1.956-5.8595-3.9687-8.3438z"/>\n      <path id="path3783" style="fill:url(#linearGradient4207)" d="m901.65 807.69-6.1874 1.8438c0.96015 1.7128 1.6545 3.5323 2.0312 5.4688 3.1194 16.034-20.962 34.284-43.031 38.5-3.395 0.64864-28.884 8.576-32.158 8.8044v4.125l41.439-12.148c26.285-5.4963 44.949-22.448 41.875-38.25-0.59564-3.0616-1.956-5.8595-3.9687-8.3438z"/>\n      <path id="path3799" style="fill:url(#linearGradient4209)" d="m857.12 822.46-3.9641 2.0937c0.88361 1.0334 1.604 2.1696 2.1216 3.4337 4.2861 10.467-9.5906 26.117-24.008 31.964-0.46163 0.18723-1.6195 0.75098-3.0428 1.4796l12.171-3.4616c15.46-7.5554 24.54-20.62 20.546-30.373-0.81842-1.9987-2.1218-3.7216-3.8245-5.1366z"/>\n      <path id="path3803" style="fill:url(#linearGradient4153)" d="m843.32 826.03-3.9641 2.0937c0.88361 1.0334 1.604 2.1696 2.1216 3.4337 4.2861 10.467-9.5906 26.117-24.008 31.964-0.46162 0.18723-1.6195 0.75098-3.0428 1.4796l12.171-3.4616c15.46-7.5554 24.54-20.62 20.546-30.373-0.81842-1.9987-2.1218-3.7216-3.8245-5.1366z"/>\n      <path id="rect3861" style="fill:url(#linearGradient4211)" d="m233.27 845.72c8.293-2.0234 15.486-1.4788 19.797 5.7872l-2.4934 17.897c-6.8751 6.1732-13.75 4.9509-20.625 0.15543l3.3212-23.839z"/>\n      <path id="path3864" style="fill:url(#linearGradient4213)" d="m253.54 848.99c8.1502-1.2102 15.167-0.5728 18.843 5.5081l-2.3731 17.034c-6.4839 2.9748-12.983 5.2096-19.631 0.14793l3.1611-22.69z"/>\n      <path id="path4025" style="opacity:.9;block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#191919" d="m400.34 852.75c-33.454 0-65.492 1.7894-95.093 5.0625l-3.6562 0.40625 1.7187 3.25c6.6711 12.664 16.562 21.113 29.062 26.438 12.501 5.3241 27.572 7.6126 45.093 8.4375 35.042 1.6498 79.954-2.6312 133.59-2 49.659 0.58438 89.508 1.8787 121.53 2.375l1.125-4.75c-47.84-23.68-134.34-39.22-233.36-39.22zm0 5c91.169 0 171.75 13.479 220.09 33.719-29.952-0.58241-65.212-1.606-109.31-2.125-53.937-0.63473-98.976 3.6522-133.4 2.0312-17.214-0.81046-31.767-3.1054-43.406-8.0625-10.453-4.4521-18.485-11.154-24.5-20.906 28.307-2.9831 58.735-4.6562 90.53-4.6562z"/>\n      <path id="rect2864" style="opacity:.9;stroke:#191919;stroke-width:5;fill-opacity:.99608;fill:#262626" d="m260.5 607.38-77.749 12.469c-27.15 4.3542-48.947 48.773-50.999 104.84 2.0523 56.071 23.849 100.49 50.999 104.84l77.749 12.469c13.296 0 24-10.704 24-24v-186.62c0-13.296-10.704-24-24-24z"/>\n      <path id="path3703" style="opacity:.9;stroke:#191919;stroke-width:5;fill-opacity:.99608;fill:#262626" d="m691.96 573.16c-2.9692 0-5.8933 0.33215-8.7812 0.96875-0.0104-0.01-0.0208-0.021-0.0312-0.0312l-63.843 12.312c-17.728 6.6047-32 14.272-32 32v212.56c0 17.728 14.272 25.395 32 32l63.843 12.312c0.0105-0.0102 0.0208-0.0211 0.0312-0.0312 2.8879 0.6366 5.812 0.96875 8.7812 0.96875 45.395 0 82.198-57.363 82.312-151.53-0.11408-94.169-36.916-151.53-82.312-151.53z"/>\n      <path id="path4157" style="opacity:.9;fill-opacity:.99608;fill:#262626" d="m400.34 594.15c-33.364 0-65.307-1.8-94.811-5.0625 25.66-48.714 97.985-30.265 205.56-31.531 49.686-0.58471 89.543-1.8793 121.53-2.375-47.16 23.334-133.53 38.969-232.28 38.969z"/>\n      <path id="path4159" style="opacity:.5;fill-opacity:.99608" d="m400.34 594.15c-3.2064 0-6.3831-0.0295-9.5624-0.0625 0.81825-16.171 6.4281-30.257 14.594-38.844 4.6714 0.0756 9.4951 0.19655 14.437 0.34375-8.5657 8.1923-14.593 22.228-15.719 38.562-1.2512 0.005-2.4947 0-3.75 0z"/>\n      <path class = "car-lights" id="left-car-light" style="block-progression:tb;text-indent:0;color:#000000;stroke:#191919;stroke-width:5;text-transform:none" d="m989.02 621.89-5.0937-0.59375c-21.545-2.5127-37.688-25.979-39.281-54.531l-0.37499-7.125 5.2499 4.8438c15.889 14.68 28.303 32.507 37.406 52.75l2.0937 4.6562z"/>\n      <path id="path4163" style="opacity:.5;stroke-linejoin:round;stroke:#292929;stroke-linecap:round;stroke-width:6;fill:none" d="m783.47 610.89s79.677 22.596 105.38 31.982c26.839 9.8018 98.859 39.146 98.859 39.146s-8.7409-42.47-30.483-57.918c-77.23-54.87-232.69-53.86-232.69-53.86"/>\n      <path id="path4165" style="fill:url(#linearGradient4185)" d="m869.97 631.55-4.4374-2.3438c0.98912-1.1568 1.7955-2.4286 2.375-3.8438 4.7979-11.717-10.736-29.236-26.875-35.781-0.51675-0.20958-1.8129-0.84066-3.4062-1.6562l13.625 3.875c17.306 8.4576 27.47 23.082 23 34-0.91615 2.2373-2.3752 4.1661-4.2812 5.75z"/>\n      <path id="path4167" style="fill:url(#linearGradient4187)" d="m878.55 636.01-4.4375-2.3438c0.98913-1.1568 1.7955-2.4286 2.375-3.8438 4.7979-11.717-10.736-29.236-26.875-35.781-0.51676-0.20958-1.8129-0.84066-3.4062-1.6562l13.625 3.875c17.306 8.4576 27.47 23.082 23 34-0.91615 2.2373-2.3752 4.1661-4.2812 5.75z"/>\n      <path id="path4169" style="fill:url(#linearGradient4189)" d="m884.74 637.42-4.4374-2.3438c0.98913-1.1568 1.7955-2.4286 2.375-3.8438 4.7979-11.717-10.736-29.236-26.875-35.781-0.51675-0.20958-1.8129-0.84066-3.4062-1.6562l13.625 3.875c17.306 8.4576 27.47 23.082 23 34-0.91615 2.2373-2.3752 4.1661-4.2812 5.75z"/>\n      <path id="path4171" style="fill:url(#linearGradient4191)" d="m901.65 641.7-6.1874-1.8438c0.96015-1.7128 1.6545-3.5323 2.0312-5.4688 3.1194-16.034-20.962-34.284-43.031-38.5-3.395-0.64864-28.884-8.576-32.158-8.8044v-4.125l41.439 12.148c26.285 5.4963 44.949 22.448 41.875 38.25-0.59564 3.0616-1.956 5.8595-3.9687 8.3438z"/>\n      <path id="path4173" style="fill:url(#linearGradient4193)" d="m901.65 641.7-6.1874-1.8438c0.96015-1.7128 1.6545-3.5323 2.0312-5.4688 3.1194-16.034-20.962-34.284-43.031-38.5-3.395-0.64864-28.884-8.576-32.158-8.8044v-4.125l41.439 12.148c26.285 5.4963 44.949 22.448 41.875 38.25-0.59564 3.0616-1.956 5.8595-3.9687 8.3438z"/>\n      <path id="path4175" style="fill:url(#linearGradient4195)" d="m857.12 626.93-3.9641-2.0937c0.88361-1.0334 1.604-2.1696 2.1216-3.4337 4.2861-10.467-9.5906-26.117-24.008-31.964-0.46163-0.18723-1.6195-0.75098-3.0428-1.4796l12.171 3.4616c15.46 7.5554 24.54 20.62 20.546 30.373-0.81842 1.9987-2.1218 3.7216-3.8245 5.1366z"/>\n      <path id="path4177" style="fill:url(#linearGradient4197)" d="m843.32 623.36-3.9641-2.0937c0.88361-1.0334 1.604-2.1696 2.1216-3.4337 4.2861-10.467-9.5906-26.117-24.008-31.964-0.46162-0.18723-1.6195-0.75098-3.0428-1.4796l12.171 3.4616c15.46 7.5554 24.54 20.62 20.546 30.373-0.81842 1.9987-2.1218 3.7216-3.8245 5.1366z"/>\n      <path id="path4179" style="fill:url(#linearGradient4199)" d="m233.27 603.66c8.293 2.0234 15.486 1.4788 19.797-5.7872l-2.4934-17.897c-6.8751-6.1732-13.75-4.9509-20.625-0.15543l3.3212 23.839z"/>\n      <path id="path4181" style="fill:url(#linearGradient4201)" d="m253.54 600.4c8.1502 1.2102 15.167 0.5728 18.843-5.5081l-2.3731-17.034c-6.4839-2.9748-12.983-5.2096-19.631-0.14793l3.1611 22.69z"/>\n      <path id="path4183" style="opacity:.9;block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#191919" d="m400.34 596.64c-33.454 0-65.492-1.7894-95.093-5.0625l-3.6562-0.40625 1.7187-3.25c6.6711-12.664 16.562-21.113 29.062-26.438 12.501-5.3241 27.572-7.6126 45.093-8.4375 35.042-1.6498 79.954 2.6312 133.59 2 49.659-0.58438 89.508-1.8787 121.53-2.375l1.125 4.75c-47.849 23.675-134.36 39.219-233.37 39.219zm0-5c91.169 0 171.75-13.479 220.09-33.719-29.952 0.58241-65.212 1.606-109.31 2.125-53.937 0.63473-98.976-3.6522-133.4-2.0312-17.214 0.81046-31.767 3.1054-43.406 8.0625-10.453 4.4521-18.485 11.154-24.5 20.906 28.307 2.9831 58.735 4.6562 90.53 4.6562z"/>\n    </g>\n  </g>\n  <metadata>\n    <rdf:RDF>\n      <cc:Work>\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>\n        <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/>\n        <dc:publisher>\n          <cc:Agent rdf:about="http://openclipart.org/">\n            <dc:title>Openclipart</dc:title>\n          </cc:Agent>\n        </dc:publisher>\n      </cc:Work>\n      <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/">\n        <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>\n        <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>\n        <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>\n      </cc:License>\n    </rdf:RDF>\n  </metadata>\n</svg>\n'),
          r.setCarView(t, n),
          r
        );
      }
      return (
        Q(t, e),
        (t.prototype.setCarView = function (e, t) {
          this.element.setAttribute('data-before', t.toString()),
            (this.element.querySelector('#car-body').style.fill = e);
        }),
        t
      );
    })(P),
    $ = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    ee = (function (e) {
      function t(t, n) {
        var r = e.call(this, 'div', ['track-line']) || this;
        return (
          (r.carField = new Y(t, n)),
          r.element.appendChild(r.carField.element),
          r
        );
      }
      return $(t, e), t;
    })(P),
    te = (function () {
      function e(e, t, n) {
        (this.selectCarButton = e),
          (this.removeCarButton = t),
          (this.car = n),
          this.setCarSelectButton(),
          this.setCarRemoveButton();
      }
      return (
        (e.setCarCreateButton = function (e, t, n) {
          var r = this;
          (this.createCarButton = e),
            (this.createCarNameInput = t),
            (this.createCarColorInput = n),
            this.createCarButton.addEventListener('click', function () {
              r.createCar();
            });
        }),
        (e.setCarUpdateButton = function (e, t, n) {
          var r = this;
          (this.updateCarButton = e),
            (this.updateCarNameInput = t),
            (this.updateCarColorInput = n),
            this.setInputsInitialState(),
            this.updateCarButton.addEventListener('click', function () {
              r.updateCar(r.selectedCarId);
            });
        }),
        (e.setСreateRandomCarsButton = function (e) {
          var t = this;
          (this.createRandomCarsButton = e),
            this.createRandomCarsButton.addEventListener('click', function () {
              t.createRandomCars();
            });
        }),
        (e.createCar = function () {
          var e = this,
            t = {
              name: this.createCarNameInput.value,
              color: this.createCarColorInput.value,
            };
          z.createCar(JSON.stringify(t)).then(function () {
            document.dispatchEvent(new CustomEvent(a, { detail: a })),
              e.setInputsInitialState();
          });
        }),
        (e.createRandomCars = function () {
          return (
            (e = this),
            (t = void 0),
            (r = function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                l,
                s = this;
              return (function (e, t) {
                var n,
                  r,
                  a,
                  o,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (o = { next: l(0), throw: l(1), return: l(2) }),
                  'function' == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function l(o) {
                  return function (l) {
                    return (function (o) {
                      if (n)
                        throw new TypeError('Generator is already executing.');
                      for (; i; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & o[0]
                                  ? r.return
                                  : o[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, o[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              a = o;
                              break;
                            case 4:
                              return i.label++, { value: o[1], done: !1 };
                            case 5:
                              i.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = i.ops.pop()), i.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = i.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== o[0] && 2 !== o[0])
                                )
                              ) {
                                i = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!a || (o[1] > a[0] && o[1] < a[3]))
                              ) {
                                i.label = o[1];
                                break;
                              }
                              if (6 === o[0] && i.label < a[1]) {
                                (i.label = a[1]), (a = o);
                                break;
                              }
                              if (a && i.label < a[2]) {
                                (i.label = a[2]), i.ops.push(o);
                                break;
                              }
                              a[2] && i.ops.pop(), i.trys.pop();
                              continue;
                          }
                          o = t.call(e, i);
                        } catch (e) {
                          (o = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, l]);
                  };
                }
              })(this, function (c) {
                for (e = x.length, t = 0; t < 100; t++)
                  (n = x[Math.floor(Math.random() * e)]),
                    (r = n.brand),
                    (o = n.models.length),
                    (i = n.models[Math.floor(Math.random() * o)]),
                    (l = {
                      name: r + ' ' + i,
                      color:
                        '#' + Math.floor(16777215 * Math.random()).toString(16),
                    }),
                    z.createCar(JSON.stringify(l)).then(function () {
                      document.dispatchEvent(new CustomEvent(a, { detail: a })),
                        s.setInputsInitialState();
                    });
                return [2];
              });
            }),
            new ((n = void 0) || (n = Promise))(function (a, o) {
              function i(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(i, l);
              }
              s((r = r.apply(e, t || [])).next());
            })
          );
          var e, t, n, r;
        }),
        (e.updateCar = function (e) {
          var t = this,
            n = {
              name: this.updateCarNameInput.value,
              color: this.updateCarColorInput.value,
            };
          z.updateCar(e, JSON.stringify(n)).then(function () {
            document.dispatchEvent(new CustomEvent(a, { detail: a })),
              t.setInputsInitialState();
          });
        }),
        (e.prototype.setCarSelectButton = function () {
          var t = this;
          this.selectCarButton.addEventListener('click', function () {
            e.updateCarButton.removeAttribute('disabled'),
              e.updateCarNameInput.removeAttribute('disabled'),
              e.updateCarColorInput.removeAttribute('disabled'),
              (e.updateCarNameInput.value = t.car.name),
              (e.updateCarColorInput.value = t.car.color),
              (e.selectedCarId = t.car.id);
          });
        }),
        (e.prototype.setCarRemoveButton = function () {
          var t = this;
          this.removeCarButton.addEventListener('click', function () {
            z.removeCar(t.car.id).then(function () {
              document.dispatchEvent(new CustomEvent(a, { detail: a })),
                e.setInputsInitialState();
            });
          });
        }),
        (e.setInputsInitialState = function () {
          this.updateCarButton.setAttribute('disabled', ''),
            this.updateCarNameInput.setAttribute('disabled', ''),
            this.updateCarColorInput.setAttribute('disabled', ''),
            (this.updateCarNameInput.value = ''),
            (this.updateCarColorInput.value = o),
            (this.createCarNameInput.value = ''),
            (this.createCarColorInput.value = o);
        }),
        e
      );
    })(),
    ne = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    re = (function (e) {
      function t(t) {
        var n = e.call(this, 'div', ['track-section']) || this;
        return (
          (n.trackId = t.id),
          (n.carControlPanel = new Z(t.name)),
          (n.trackLine = new ee(t.color, n.trackId)),
          n.element.appendChild(n.carControlPanel.element),
          n.element.appendChild(n.trackLine.element),
          (n.carDataHandler = new te(
            n.carControlPanel.selectCarButton.element,
            n.carControlPanel.removeCarButton.element,
            t
          )),
          n
        );
      }
      return ne(t, e), t;
    })(P),
    ae = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    oe = (function (e) {
      function t(t) {
        var n = e.call(this, 'div', ['race-field']) || this;
        return (
          (n.trackSections = []),
          (n.currentPageNumber = t),
          z
            .getCarsOnPageData(n.currentPageNumber)
            .then(function (e) {
              (n.carsNumber = e.allCarsNumber),
                (n.garageTitle = n.setGarageTitle()),
                (n.pageTitle = n.setPageTitle()),
                n.element.appendChild(n.garageTitle.element),
                n.element.appendChild(n.pageTitle.element),
                (n.carsOnTrack = e.carsOnPageData),
                n.setTrackSections();
            })
            .catch(function (e) {
              'Failed to fetch' === e.message &&
                (n.element.classList.add('server-error'),
                (n.element.innerHTML = 'Server is probably not running'));
            }),
          n
        );
      }
      return (
        ae(t, e),
        (t.prototype.setGarageTitle = function () {
          var e = j.createTextFromTemplate(p, ['' + this.carsNumber]);
          return new j([p.className], e);
        }),
        (t.prototype.setPageTitle = function () {
          var e = j.createTextFromTemplate(f, [
            this.currentPageNumber.toString(),
          ]);
          return new j([f.className], e);
        }),
        (t.prototype.setTrackSections = function () {
          var e,
            t = this;
          (H.raceControlHandlers = []),
            null === (e = this.carsOnTrack) ||
              void 0 === e ||
              e.forEach(function (e) {
                var n = new re(e);
                H.raceControlHandlers.push(
                  new H(
                    n.trackLine.carField.element,
                    n.trackLine.element,
                    n.carControlPanel.startTestButton.element,
                    n.carControlPanel.stopTestButton.element,
                    n.trackId
                  )
                ),
                  t.trackSections.push(n),
                  t.element.appendChild(n.element);
              });
        }),
        t
      );
    })(P),
    ie = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    le = (function (e) {
      function t() {
        var t = e.call(this, 'div', ['garage-field']) || this;
        return (
          (t.buttonField = document.createElement('div')),
          t.buttonField.classList.add('garage-field__button-field'),
          (t.previousPageButton = new R(
            [r.previousPage.className],
            r.previousPage.label
          )),
          (t.nextPageButton = new R([r.nextPage.className], r.nextPage.label)),
          t.buttonField.appendChild(t.previousPageButton.element),
          t.buttonField.appendChild(t.nextPageButton.element),
          (t.currentPageNumber = 1),
          (t.createCarForm = new A(i, s, r.createCar)),
          (t.updateCarForm = new A(l, c, r.updateCar)),
          (t.raceControlPanel = new q()),
          (t.raceField = new oe(t.currentPageNumber)),
          te.setCarCreateButton(
            t.createCarForm.submitButton.element,
            t.createCarForm.carNameInput.element,
            t.createCarForm.carColorInput.element
          ),
          te.setCarUpdateButton(
            t.updateCarForm.submitButton.element,
            t.updateCarForm.carNameInput.element,
            t.updateCarForm.carColorInput.element
          ),
          te['setСreateRandomCarsButton'](
            t.raceControlPanel.generateCarsButton.element
          ),
          t.element.appendChild(t.createCarForm.element),
          t.element.appendChild(t.updateCarForm.element),
          t.element.appendChild(t.raceControlPanel.element),
          t.element.appendChild(t.raceField.element),
          t.element.appendChild(t.buttonField),
          t
        );
      }
      return (
        ie(t, e),
        (t.prototype.refreshRaceField = function () {
          this.raceField.element.remove(),
            (this.raceField = new oe(this.currentPageNumber)),
            this.element.insertBefore(this.raceField.element, this.buttonField);
        }),
        t
      );
    })(P),
    se = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    ce = (function (e) {
      function t() {
        var t = e.call(this, 'div', ['winners-field']) || this;
        return (
          (t.buttonField = document.createElement('div')),
          t.buttonField.classList.add('winners-field__button-field'),
          (t.previousPageButton = new R(
            [r.previousPage.className],
            r.previousPage.label
          )),
          (t.nextPageButton = new R([r.nextPage.className], r.nextPage.label)),
          t.buttonField.appendChild(t.previousPageButton.element),
          t.buttonField.appendChild(t.nextPageButton.element),
          (t.currentPageNumber = 1),
          t.element.appendChild(t.buttonField),
          t
        );
      }
      return se(t, e), t;
    })(P),
    ue = (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })(),
    de = (function (e) {
      function t() {
        var t = e.call(this, 'div', ['page-field']) || this;
        return (
          (t.gameTitle = document.createElement('h1')),
          (t.gameTitle.innerText = m),
          t.gameTitle.classList.add(h),
          (t.buttonField = document.createElement('div')),
          t.buttonField.classList.add('page-field__button-field'),
          (t.garageButton = new R([r.toGarage.className], r.toGarage.label)),
          (t.winnersButton = new R([r.toWinners.className], r.toWinners.label)),
          (t.garageField = new le()),
          (t.winnersField = new ce()),
          (t.finishLine = document.createElement('div')),
          t.finishLine.classList.add('page-field__finish-line'),
          t.element.appendChild(t.gameTitle),
          t.buttonField.appendChild(t.garageButton.element),
          t.buttonField.appendChild(t.winnersButton.element),
          t.element.appendChild(t.buttonField),
          t.element.appendChild(t.garageField.element),
          t.element.appendChild(t.winnersField.element),
          t.element.appendChild(t.finishLine),
          t
        );
      }
      return ue(t, e), t;
    })(P),
    pe = (function () {
      function e(e) {
        var t = this;
        (this.pageField = e),
          this.pageField.garageButton.element.addEventListener(
            'click',
            function () {
              t.showGarageField();
            }
          ),
          this.pageField.winnersButton.element.addEventListener(
            'click',
            function () {
              t.showWinnersField();
            }
          ),
          this.setCarPaginationButtons(),
          document.addEventListener(a, function () {
            t.refreshAllPages();
          });
      }
      return (
        (e.prototype.showGarageField = function () {
          (this.pageField.winnersField.element.style.display = 'none'),
            (this.pageField.garageField.element.style.display = 'block');
        }),
        (e.prototype.showWinnersField = function () {
          (this.pageField.garageField.element.style.display = 'none'),
            (this.pageField.winnersField.element.style.display = 'block');
        }),
        (e.prototype.setCarPaginationButtons = function () {
          var e = this;
          this.pageField.garageField.previousPageButton.element.addEventListener(
            'click',
            function () {
              e.pageField.garageField.currentPageNumber--, e.refreshAllPages();
            }
          ),
            this.pageField.garageField.nextPageButton.element.addEventListener(
              'click',
              function () {
                e.pageField.garageField.currentPageNumber++,
                  e.refreshAllPages();
              }
            );
        }),
        (e.prototype.refreshAllPages = function () {
          this.pageField.garageField.refreshRaceField();
        }),
        e
      );
    })();
  window.onload = function () {
    var e, t;
    (e = document.body),
      (t = new de()),
      new pe(t).showGarageField(),
      e.appendChild(t.element);
  };
})();
