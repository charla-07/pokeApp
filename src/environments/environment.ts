// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    api: 'https://pokeapi.co/api/v2/',
    pokemon: {
      id: 'pokemon/_id_',
      name: 'pokemon/_name_'
    },
    type: {
      id:'type/_id_'
    },
    ability: {
      id: 'ability/_id_'
    }
  },
  endpoint2: {
    api: 'https://swapi.dev/api/',
    people: {
      id: 'people/_id_'
    },
    vehicles: {
      id: 'vehicles/_id_'
    },
    films: {
      id: 'films/_id_'
    },
    starships: {
      id: 'starships/_id_'
    }

  },

  firebaseConfig: {
    apiKey: "AIzaSyDwG7pA66-BfAEViHRi4jOqK6Eu4IattQE",
    authDomain: "ioniciotnodemcu-3815c.firebaseapp.com",
    projectId: "ioniciotnodemcu-3815c",
    storageBucket: "ioniciotnodemcu-3815c.appspot.com",
    messagingSenderId: "571682235676",
    appId: "1:571682235676:web:7214289410e529f7a806d9",
    measurementId: "G-XKB9X5C0D5"
  }
  
};
  


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
