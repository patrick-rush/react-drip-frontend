import {
    START_LOADING_PLANTS,
    SUCCESSFULLY_LOADED_PLANTS,
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    plants: []
};

export default function puzzlesReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_PLANTS: 
            return {
                ...state,
                loadingState: "inProgress"};
        case SUCCESSFULLY_LOADED_PLANTS: 
            return {
                ...state,
                loadingState: "successfull",
                plants: action.payload
            }
        default:
            return state;
    }
}