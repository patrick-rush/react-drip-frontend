import {
    START_LOADING_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS,
    SET_CURRENT_EVENT,
    TOGGLE_SHOW_EVENT_FORM,
    START_ADDING_EVENT,
    SUCCESSFULLY_ADDED_EVENT,
    SUCCESSFULLY_LOADED_EVENTS_BY_PLANT
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
        case START_LOADING_EVENTS: 
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
                currentEvent: state.events.filter(event => event.id === action.payload)[0]
            }
        case TOGGLE_SHOW_EVENT_FORM:
            return {
                ...state,
                showEventForm: !state.showEventForm
            }
        case START_ADDING_EVENT:
            console.log("got to START_ADDING_EVENT")
            return {
                ...state,
                loadingState: "inProgress"
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
        default:
            return state;
    }
}