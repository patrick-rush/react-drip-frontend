import {
    START_LOADING_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS,
    // SET_CURRENT_EVENT,
    // START_ADDING_EVENT,
    // SUCCESSFULLY_ADDED_EVENT
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    events: [],
    currentEvent: null
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
                loadingState: "successfull",
                events: action.payload
            }
        // case SET_CURRENT_EVENT: 
        //     return {
        //         ...state,
        //         currentEvent: state.events.filter(event => event.id === action.payload)[0]
        //     }
        // case START_ADDING_EVENT:
        //     return {
        //         ...state,
        //         loadingState: "inProgress"
        //     }
        // case SUCCESSFULLY_ADDED_EVENT:
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         loadingState: "successfull",
        //         currentEvent: action.payload
        //     }
        default:
            return state;
    }
}