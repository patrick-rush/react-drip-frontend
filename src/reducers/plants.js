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
    currentPlant: null,
    errors: {}
};

export default function plantsReducer(state = initialState, action) {
    switch (action.type) {
        case START_CONTACTING_PLANT_SERVER: 
            return {
                ...state,
                loadingState: "inProgress"}
        case SUCCESSFULLY_LOADED_PLANTS: 
            const plants = action.payload.map(plant =>
                ({
                    name: plant.name,
                    id: plant.id,
                    species: plant.species
                })
            )
            return {
                ...state,
                loadingState: "successful",
                plants: plants
            }
        case SUCCESSFULLY_ADDED_PLANT:
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload,
                errors: {}
            }
        case SUCCESSFULLY_UPDATED_PLANT:
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
            return {
                ...state,
                // eslint-disable-next-line
                currentPlant: state.plants.find(plant => plant.id == action.payload)
            }
        case SUCCESSFULLY_LOADED_PLANT:
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload,
            }
        default:
            return state;
    }
}