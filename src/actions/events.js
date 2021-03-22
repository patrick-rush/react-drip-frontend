import {
    START_CONTACTING_EVENT_SERVER,
    SUCCESSFULLY_LOADED_EVENTS,
    SUCCESSFULLY_ADDED_EVENT,
    SUCCESSFULLY_LOADED_EVENTS_BY_PLANT,
    SUCCESSFULLY_DELETED_EVENT,
    SUCCESSFULLY_UPDATED_EVENT,
    SET_CURRENT_EVENT,
    TOGGLE_SHOW_EVENT_FORM,
} from '.';

export const fetchEvents = () => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        return fetch(`${process.env.REACT_APP_SERVER}/care_events`)
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
        fetch(`${process.env.REACT_APP_SERVER}/plants/${plantId}/care_events`, {
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

export const deleteEvent = (eventId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        fetch(`${process.env.REACT_APP_SERVER}/care_events/${eventId}`, { 
            method: 'DELETE', 
        })
        .then(() => {
            dispatch({
                type: SUCCESSFULLY_DELETED_EVENT,
                payload: eventId
            })
        })
    }
}

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

export const updateEvent = (event, eventId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        fetch(`${process.env.REACT_APP_SERVER}/care_events/${eventId}`, {
            method: 'PATCH',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"    
            },
            body: JSON.stringify({ care_event: event })
        })
            .then(res => res.json())
            .then((eventJson) => {
                dispatch({
                    type: SUCCESSFULLY_DELETED_EVENT,
                    payload: eventId
                })
                dispatch({
                    type: SUCCESSFULLY_UPDATED_EVENT,
                    payload: eventJson
                })
            })
    }
}

export const createEvent = (event) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_EVENT_SERVER })
        return fetch(`${process.env.REACT_APP_SERVER}/care_events`, {
            method: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"    
            },
            body: JSON.stringify({ care_event: event })
        })
            // .then(res => res.json())
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((errors) => Promise.reject(errors))
                }
            })
            .then((eventJson) => {
                dispatch({
                    type: SUCCESSFULLY_ADDED_EVENT,
                    payload: eventJson
                })
            });

    }
}