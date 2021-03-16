import {
    START_LOADING_PLANTS,
    SUCCESSFULLY_LOADED_PLANTS,
    START_ADDING_PLANT,
    SUCCESSFULLY_ADDED_PLANT,
    SET_CURRENT_PLANT
} from '.';

export const fetchPlants = () => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_PLANTS })
        fetch(`http://localhost:3000/plants`)
            .then((res) => res.json())
            .then((plantsJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_PLANTS,
                    payload: plantsJson
                })
            });
    };
};

export const addPlant = (formData) => {
    return (dispatch) => {
        dispatch({ type: START_ADDING_PLANT })
        fetch("http://localhost:3000/plants", {
            method: "POST",
            // headers: {
            //     "Accept" : "application/json",
            //     "Content-Type" : "application/json"
            // },
            body: formData
        })
            .then(res => res.json())
            .then((plantJson) => {
                dispatch({
                    type: SUCCESSFULLY_ADDED_PLANT,
                    payload: plantJson
                })
            });
    };
};

export const setPlantToActive = (plantId) => {
    return (dispatch) => {
        dispatch({ type: SET_CURRENT_PLANT, payload: plantId })
    }
}