This project is a component based single page application.

* Basic structure:

There are two views on the site: "Garage" and "Winners", which don't change their view states while switching.

"Garage" view contains its name, page number, full amount of cars in database, cars' creation and race control panels, track lines with cars on them and control panel near each track line. User can create, update or delete a car, as well as generate random cars. Also he can start a race or test any car separately using corresponding buttons.

When race or test starts according to server answers each car receives its own velocity and starts to move towards the finish line. Car's engine can break up during the ride - which happens, when server sends 500 error, which would be shown by oil leaking. If a race would be initiated and end without reseting a popup window with the race results would appear and the winners data would be updated.

"Winners" view contains its name, page number, and the full amount of winners records in the database. After some car wins it is displayed at the "Winners view" table.
User can sort cars by wins number and by best time (ASC, DESC).


* Application starting requirements:

To setup and run this application, user has to run a server on his 3000 port first.
To do it he needs to make following steps:

- Use node 14.x or higher.
- Clone this repo: $ git clone https://github.com/Vadavur/async-race-server.git.
- Go to downloaded folder: $ cd async-race-api.
- Install dependencies: $ npm install.
- Start server: $ npm start.
- Now requests would be sent to the address: http://127.0.0.1:3000.

Without starting a server a warning would be printed on the "Garage" view and application would not work.


* Key skills used to create this application:

- Webpack
- Typescript
- SCSS
- Components based design
- Сommunication with a server (fetch, REST API)
- Async coding / Promises
- JS Animations
- DOM Api
- Eslint
- GIT
