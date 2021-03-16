import {
    START_LOADING_PLANTS,
    SUCCESSFULLY_LOADED_PLANTS,
    SET_CURRENT_PLANT,
    START_ADDING_PLANT,
    SUCCESSFULLY_ADDED_PLANT,
    START_UPDATING_PLANT,
    SUCCESSFULLY_UPDATED_PLANT

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
                loadingState: "successful",
                plants: action.payload
            }
        case SET_CURRENT_PLANT: 
            console.log(action.payload)
            return {
                ...state,
                currentPlant: state.plants.filter(plant => plant.id === action.payload)[0]
            }
        case START_ADDING_PLANT:
            return {
                ...state,
                loadingState: "inProgress"
            }
        case SUCCESSFULLY_ADDED_PLANT:
            console.log(action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload
            }
        case START_UPDATING_PLANT:
            return {
                ...state,
                loadingState: "inProgress"
            }
        case SUCCESSFULLY_UPDATED_PLANT:
            console.log("successful update", action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload
            }
        default:
            return state;
    }
}

// START_ADDING_PLANT,
// SUCCESSFULLY_ADDED_PLANT
