import {
    START_CONTACTING_EVENT_SERVER,
    SUCCESSFULLY_LOADED_EVENTS,
    SET_CURRENT_EVENT,
    TOGGLE_SHOW_EVENT_FORM,
    SUCCESSFULLY_ADDED_EVENT,
    SUCCESSFULLY_LOADED_EVENTS_BY_PLANT
} from '.';

export const fetchEvents = () => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        return fetch(`http://localhost:3000/care_events`)
            .then((res) => res.json())
            .then((eventsJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_EVENTS,
                    payload: eventsJson
                })
            });
    };
};

export const fetchEventsByPlant = (plantId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        fetch(`http://localhost:3000/plants/${plantId}/care_events`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((eventsJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_EVENTS_BY_PLANT,
                    payload: eventsJson
                })
            });
    };
};

export const setEventToActive = (eventId) => {
    return (dispatch) => {
        dispatch({ type: SET_CURRENT_EVENT, payload: eventId })
    }
}

export const toggleShowEventForm = () => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SHOW_EVENT_FORM })
    }
}

export const createEvent = (event) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        console.log("from createEvent Action =", event)
        fetch("http://localhost:3000/care_events", {
            method: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"    
            },
            body: JSON.stringify({care_event: event})
        })
            .then(res => res.json())
            .then((eventJson) => {
                dispatch({
                    type: SUCCESSFULLY_ADDED_EVENT,
                    payload: eventJson
                })
            });

    }
}

// export const addPlant = (plant) => {
//     return (dispatch) => {
//         dispatch({ type: START_CONTACTING_EVENT_SERVER })
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