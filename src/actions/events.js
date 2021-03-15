import {
    START_LOADING_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS,
    // START_ADDING_EVENT,
    // SUCCESSFULLY_ADDED_EVENT
} from '.';

export const fetchEvents = () => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_EVENTS })
        fetch(`http://localhost:3000/care_events`)
            .then((res) => res.json())
            .then((eventsJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_EVENTS,
                    payload: eventsJson
                })
            });
    };
};

// export const addPlant = (plant) => {
//     return (dispatch) => {
//         dispatch({ type: START_ADDING_EVENT })
//         fetch("http://localhost:3000/plants", {
//             method: "POST",
//             headers: {
//                 "Accept" : "application/json",
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({plant: plant})
//         })
//             .then(res => res.json())
//             .then((plantJson) => {
//                 dispatch({
//                     type: SUCCESSFULLY_ADDED_EVENT,
//                     payload: plantJson
//                 })
//             });
//     };
// };