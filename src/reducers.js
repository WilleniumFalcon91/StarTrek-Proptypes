import { combineReducers } from 'redux';

import * as actions from './actions';
import * as constants from './constants';

const defaultLocationsState = {
    planets: {},
    ships: {}
};

const locations = (state=defaultLocationsState, action) => {
    switch (action.type) {
        case constants.ADD_LOCATION:
            var newState = {...state};
            if (action.locationType === constants.LOCATION_SHIP) {
                newState.ships[action.id] = {
                    id: action.id,
                    name: action.name,
                    resources: action.resources
                }
            } else if (action.locationType === constants.LOCATION_PLANET) {
                newState.planets[action.id] = {
                    id: action.id,
                    name: action.name,
                    resources: action.resources
                }
            }
            return newState
        case constants.ADD_RESOURCE:
            var newState = {...state};
            let locationThatIWantToChange;
            for (let locationType in newState.locations) {
                for (let location in locationType) {
                    if (location.id === action.id) {
                        locationThatIWantToChange = location;
                    }
                }
            }
            if (locationThatIWantToChange) {
                locationThatIWantToChange.resources = {
                    ...locationThatIWantToChange.resources,
                    [action.resource]: locationThatIWantToChange.resources[action.resource] + action.howMany
                }
            }
            return newState;
        default:
            return state;
    }
}



/*
export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    PLANET_EARTH: 'PLANET_EARTH',
    PLANET_THE_SUN: 'PLANET_THE_SUN'
}



const planets = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_PLANET:
            return [
                ...state, 
                {
                    id: action.id,
                    name: action.name,
                    crystals: 5,
                }
            ]
        case action.REMOVE_CRYSTALS:
            return state.map( (planet) => (
                (action.id === planet.id)
                ? {...planet, crystals: planet.crystals - action.howMany}
                : planet
            ));
        case action.ADD_CRYSTALS:
            return state.map( (planet) => (
                (action.id === planet.id)
                ? {...planet, crystals: planet.crystals + action.howMany}
                : planet
            ));
        default:
            return state;
    }
};

const ships = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_SHIP:
            return [
                ...state,
                {
                    id: action.id, 
                    name: action.name,
                    crystals: 0,
                } 
            ]
        case action.REMOVE_CRYSTALS:
            return state.map( (ship) => (
                (action.id === ship.id)
                ? {...ship, crystals: ship.crystals - action.howMany}
                : ship
            ));
        case action.ADD_CRYSTALS:
            return state.map( (ship) => (
                (action.id === ship.id)
                ? {...ship, crystals: ship.crystals + action.howMany}
                : ship
            ));
        default:
            return state;
    }
}


const crewMembers = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_MEMBER:
            // return state.concat({
            //     name: action.name,
            //     rank: action.rank,
            //     id: action.id,
            //     location: action.location
            // });

            return [
                ...state,
                {
                name: action.name,
                rank: action.rank,
                id: action.id,
                location: action.location
                }
            ]

        case actions.BEAM_MEMBER:
            return state.map((crewMember) => {
                if (action.id === crewMember.id) {

                    let newLocation = crewMember.location;
                    if (action.location in LOCATIONS) {
                        newLocation = action.location;
                    }

                    // return Object.assign({}, crewMember, {
                    //     location: action.location
                    // })

                    return {
                        ...crewMember,
                        location: newLocation
                    }

                } else {
                    return crewMember
                }
            })
        default: 
            return state;
    }
}

store.dispatch(addShip('Enterprise', 1000, {}));

const locations = (state={ planet: {}, ships: {}}, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            const newState = {...state};
            if (action.locationType === LOCATION_SHIP) {
                newState.ships[action.id] = {
                    id: action.id,
                    name: action.name,
                    resources: action.resources
                }
            } else {
                newState.planets[action.id] = {
                    id: action.id,
                    name: action.name,
                    resources: action.resources
                }
            }
            return newState
        default:
            return state;
    }
}
*/
export default combineReducers({
    locations,
});