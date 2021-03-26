import {
    START_CONTACTING_PLANT_SERVER,
    SUCCESSFULLY_LOADED_PLANTS,
    SUCCESSFULLY_ADDED_PLANT,
    SUCCESSFULLY_UPDATED_PLANT,
    SUCCESSFULLY_DELETED_PLANT,
    SET_CURRENT_PLANT,
    SUCCESSFULLY_LOADED_PLANT
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    plants: [],
    currentPlant: {},
    errors: {}
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
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload,
                errors: {}
            }
        case SUCCESSFULLY_UPDATED_PLANT:
            console.log("payload", action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload,
                // eslint-disable-next-line
                plants: state.plants.map(plant => (plant.id == action.payload.id ? action.payload : plant))
            }
        case SUCCESSFULLY_DELETED_PLANT:
            return {
                ...state,
                loadingState: "successful",
                currentPlant: null,
                plants: state.plants.filter(plant => plant.id !== action.payload)
            }    
        case SET_CURRENT_PLANT: 
            return {
                ...state,
                // eslint-disable-next-line
                currentPlant: state.plants.find(plant => plant.id == action.payload)
            }
        case SUCCESSFULLY_LOADED_PLANT:
            console.log("success", action.payload)
            return {
                ...state,
                loadingState: "successful",
                // eslint-disable-next-line
                currentPlant: state.plants.find(plant => plant.id == action.payload.id) || action.payload,
            }
        default:
            return state;
    }
}