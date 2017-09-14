
// let things = {
//     locations: {
//         planets: {
//             '52': {
//                 id: 52,
//                 name: "Pluto",
//                 resources: {
//                     crystals: 1000,
//                 }
//             },
//             '54': {
//                 id: 54,
//                 name: "Earth",
//                 resources: {
//                     crystals: 1000,
//                 }
//             },
//         },
//         ships: {
//             '1000': {
//                 id: 1000,
//                 name: "Enterprise",
//                 resources: {
//                     cargo: 500
//                 }
//             }
//         }
//     },
//     crewMembers: {
//         '300': {
//             id: 300,
//             name: 'Leo',
//             rank: "General"
//         }
//     }
// }



// {
//     type: ADD_MEMBER,
//     name: 'crusher',
//     rank: 'chief medical officer',
//     id: 12345,
//     location: '54'
// }

// {
//     type: BEAM_MEMBER,
//     id: 12345,
//     location: '1000'
// }

// {
//     type: ADD_SHIP,
//     name: "ENTERPRISE",
//     id: 12345,
// }


// {
//     type: ADD_PLANET,
//     name: "EARTH",
//     id: 12345,
// }

// const LOCATION_PLANET = 'planets';
// {
//     type: ADD_LOCATION, 
//     locationType: LOCATION_PLANET,
//     name: "EARTH",
//     id: 225343
// }

// {
//     type: REMOVE_RESOURCE,
//     resource: 'crystals',
//     howMany: 1,
//     id: 1
// }
// {
//     type: ADD_RESOURCE,
//     resource: 'crystals',
//     howMany: 1,
//     id: 1
// }



import * as constants from './constants';

export const addMember = (name, rank, id, location) => {
    return {
        type: constants.ADD_MEMBER,
        name: name,
        rank: rank,
        id: id,
        location: location,
    }
};

export const beamMember = (id, location) => {
    return {
        type: constants.BEAM_MEMBER,
        id: id,
        location: location,
    }
};

export const addShip = (name, id, resources) => {
    return {
        type: constants.ADD_LOCATION,
        locationType: constants.LOCATION_SHIP,
        name: name,
        id: id,
        resources: resources,
    }
};

export const addPlanet = (name, id, resources) => {
    return {
        type: constants.ADD_LOCATION,
        locationType: constants.LOCATION_PLANET,
        name: name,
        id: id,
        resources: resources,
    }
};

export const addResource = (resourceName, howMany, idToAddTo) => {
    return {
        type: constants.ADD_RESOURCE,
        resource: resourceName,
        howMany: howMany,
        id: idToAddTo
    }
};
export const removeResource = (resourceName, howMany, idToRemoveFrom) => {
    return {
        type: constants.REMOVE_RESOURCE,
        resource: resourceName,
        howMany: howMany,
        id: idToRemoveFrom
    }
};

export default {
    
}



