import {
    START_LOADING_PLANTS,
    SUCCESSFULLY_LOADED_PLANTS,
    START_ADDING_PLANT,
    SUCCESSFULLY_ADDED_PLANT,
    // START_UPDATING_PLANT,
    SUCCESSFULLY_UPDATED_PLANT,
    START_DELETING_PLANT,
    SUCCESSFULLY_DELETED_PLANT,
    SET_CURRENT_PLANT,
    // START_LOADING_PLANT,
    // SUCCESSFULLY_LOADED_PLANT
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
                loadingState: "inProgress"}
        case SUCCESSFULLY_LOADED_PLANTS: 
            return {
                ...state,
                loadingState: "successful",
                plants: action.payload
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
        // case START_UPDATING_PLANT:
        //     return {
        //         ...state,
        //         loadingState: "inProgress"
        //     }
        case SUCCESSFULLY_UPDATED_PLANT:
            console.log("successful update", action.payload)
            return {
                ...state,
                loadingState: "successful",
                currentPlant: action.payload
            }
        case START_DELETING_PLANT:
            return {
                ...state,
                loadingState: "inProgress"
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
        // case START_LOADING_PLANT:
        //     return {
        //         ...state,
        //         loadingState: "inProgress"
        //     }
        // case SUCCESSFULLY_LOADED_PLANT:
        //     return {
        //         ...state,
        //         loadingState: "successful",
        //         plants: [...state.plants, action.payload],
        //         currentPlant: action.payload
        //     }
        default:
            return state;
    }
}

// START_ADDING_PLANT,
// SUCCESSFULLY_ADDED_PLANT
