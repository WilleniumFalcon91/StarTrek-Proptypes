import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import locations from './reducers'

import actions from "./actions"

import starTrekApp from './reducers'

import {createStore} from 'redux';

const store = createStore(starTrekApp);

window.store = store;

window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
window.ADD_SHIP = actions.ADD_SHIP;
window.ADD_PLANET = actions.ADD_PLANET;
window.TRANSFER_CRYSTALS = actions.TRANSFER_CRYSTALS;

// window.TRANSPORTER_ROOM = LOCATIONS.TRANSPORTER_ROOM;
// window.PLANET_EARTH = LOCATIONS.PLANET_EARTH;
// window.PLANET_THE_SUN = LOCATIONS.PLANET_THE_SUN;

// store.dispatch({
//     type: window.ADD_SHIP,
//     name: "ENTERPRISE",
//     id: 1
// })
// store.dispatch({
//     type: window.ADD_SHIP,
//     name: "DEATH STAR",
//     id: 2
// })
// store.dispatch({
//     type: window.ADD_SHIP,
//     name: "WILLENIUM FALCON",
//     id: 3
// })

// store.dispatch({
//     type: window.ADD_PLANET,
//     name: "EARTH",
//     id: 1
// })
// store.dispatch({
//     type: window.ADD_PLANET,
//     name: "HOTH",
//     id: 2
// })
// store.dispatch({
//     type: window.ADD_PLANET,
//     name: "MARS",
//     id: 3
// })

// store.dispatch({
//     type: window.ADD_MEMBER,
//     name: "WILL",
//     id: 1
// })
// store.dispatch({
//     type: window.ADD_MEMBER,
//     name: "KIRK",
//     id: 2
// })
// store.dispatch({
//     type: window.ADD_MEMBER,
//     name: "SPOCK",
//     id: 3
// })

const transferCrystals = (store, howMany, fromId, toId) => {
    const allPlanets = store.getState().planets;
    const thePlanet = allPlanets.filter( planet => fromId === planet.id)[0];
    
    if (thePlanet.crystals >= howMany) {
        store.dispatch({
            type: actions.REMOVE_CRYSTALS,
            howMany: howMany,
            id: fromId
        });
        store.dispatch({
            type: actions.ADD_CRYSTALS,
            howMany: howMany,
            id: toId
        });
    } else {

    }
};

window.transferCrystals = transferCrystals;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
