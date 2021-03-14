import {
    START_LOADING_PLANTS,
    SUCCESSFULLY_LOADED_PLANTS,
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
