import {
    START_LOADING_PLANTS,
    SUCCESSFULLY_LOADED_PLANTS,
    SET_CURRENT_PLANT
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    plants: [],
    currentPlant: null
};

export default function plantsReducer(state = initialState, action) {
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
        case SET_CURRENT_PLANT: 
            return {
                ...state,
                currentPlant: state.plants.filter(plant => plant.id === action.payload)[0]
            }

        default:
            return state;
    }
}