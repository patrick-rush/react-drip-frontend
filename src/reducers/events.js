import {
    START_CONTACTING_EVENT_SERVER,
    SUCCESSFULLY_LOADED_EVENTS,
    SUCCESSFULLY_ADDED_EVENT,
    SUCCESSFULLY_LOADED_EVENTS_BY_PLANT,
    SUCCESSFULLY_DELETED_EVENT,
    SUCCESSFULLY_UPDATED_EVENT,
    SET_CURRENT_EVENT,
    TOGGLE_SHOW_EVENT_FORM,
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    events: [],
    currentEvent: null,
    showEventForm: false,
    eventsByCurrentPlant: []
};

export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case START_CONTACTING_EVENT_SERVER: 
            return {
                ...state,
                loadingState: "inProgress"};
        case SUCCESSFULLY_LOADED_EVENTS: 
            return {
                ...state,
                loadingState: "successful",
                events: action.payload
            }
        case SET_CURRENT_EVENT: 
            console.log("from reducer", action.payload)
            return {
                ...state,
                // eslint-disable-next-line
                currentEvent: state.events.find(event => event.id == action.payload)
            }
        case TOGGLE_SHOW_EVENT_FORM:
            return {
                ...state,
                showEventForm: !state.showEventForm
            }
        case SUCCESSFULLY_ADDED_EVENT:
            console.log(action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentEvent: action.payload,
                eventsByCurrentPlant: [...state.eventsByCurrentPlant, action.payload]
            }
        case SUCCESSFULLY_LOADED_EVENTS_BY_PLANT:
            return {
                ...state,
                loadingState: "successful",
                eventsByCurrentPlant: action.payload
            }
        case SUCCESSFULLY_DELETED_EVENT:
            return {
                ...state,
                loadingState: "successful",
                currentEvent: null,
                events: state.events.filter(event => event.id !== action.payload)
            }
        case SUCCESSFULLY_UPDATED_EVENT:
            return {
                ...state,
                loadingState: "successful",
                // eslint-disable-next-line
                currentEvent: action.payload
            }
        default:
            return state;
    }
}