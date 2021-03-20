import {
    START_CONTACTING_PLANT_SERVER,
    SUCCESSFULLY_LOADED_PLANTS,
    SUCCESSFULLY_ADDED_PLANT,
    SUCCESSFULLY_UPDATED_PLANT,
    SUCCESSFULLY_DELETED_PLANT,
    SET_CURRENT_PLANT,
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    plants: [],
    currentPlant: null
};

export default function plantsReducer(state = initialState, action) {
    switch (action.type) {
        case START_CONTACTING_PLANT_SERVER: 
            return {
                ...state,
                loadingState: "inProgress"}
        case SUCCESSFULLY_LOADED_PLANTS: 
            return {
                ...state,
                loadingState: "successful",
                plants: action.payload
            }
        case SUCCESSFULLY_ADDED_PLANT:
            console.log(action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload
            }
        case SUCCESSFULLY_UPDATED_PLANT:
            console.log("successful update", action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload
            }
        case SUCCESSFULLY_DELETED_PLANT:
            return {
                ...state,
                loadingState: "successful",
                currentPlant: null,
                plants: state.plants.filter(plant => plant.id !== action.payload)
            }    
        case SET_CURRENT_PLANT: 
            console.log(action.payload)
            return {
                ...state,
                // eslint-disable-next-line
                currentPlant: state.plants.find(plant => plant.id == action.payload)
            }
        default:
            return state;
    }
}