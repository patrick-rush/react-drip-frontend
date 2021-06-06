import { fetchEventsByPlant } from './events';
import { fetchNotesByPlant } from './notes';

import {
    START_CONTACTING_PLANT_SERVER,
    SUCCESSFULLY_LOADED_PLANTS,
    SUCCESSFULLY_ADDED_PLANT,
    SUCCESSFULLY_UPDATED_PLANT,
    SUCCESSFULLY_DELETED_PLANT,
    SET_CURRENT_PLANT,
    CLEAR_NOTES_BY_CURRENT_PLANT,
    CLEAR_EVENTS_BY_CURRENT_PLANT,
    SUCCESSFULLY_LOADED_PLANT,
    GET_TOKEN
} from '.';

export const fetchPlants = () => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_PLANT_SERVER })
        return fetch(`${process.env.REACT_APP_SERVER}/plants`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: GET_TOKEN()
            }
        })
            .then((res) => res.json())
            .then((plantsJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_PLANTS,
                    payload: plantsJson
                })
            });
    };
};

export const fetchPlant = (plantId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_PLANT_SERVER })
        return fetch(`${process.env.REACT_APP_SERVER}/plants/${plantId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: GET_TOKEN()
            }
        })
            .then((res) => res.json())
            .then((plantJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_PLANT,
                    payload: plantJson
                })
                dispatch(fetchEventsByPlant(plantId));
                dispatch(fetchNotesByPlant(plantId));
            })
        }
}

export const addPlant = (formData) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_PLANT_SERVER })
        return fetch(`${process.env.REACT_APP_SERVER}/plants`, {
            method: "POST",
            body: formData,
            headers: {
                // "Accept": "application/json",
                Authorization: GET_TOKEN()
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then((errors) => Promise.reject(errors))
                }
            })
            .then((plantJson) => {
                dispatch({
                    type: CLEAR_NOTES_BY_CURRENT_PLANT
                })
                dispatch({
                    type: CLEAR_EVENTS_BY_CURRENT_PLANT
                })
                dispatch({
                    type: SUCCESSFULLY_ADDED_PLANT,
                    payload: plantJson
                })
            })
    };
};

export const updatePlant = (formData, plantId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_PLANT_SERVER })
        return fetch(`${process.env.REACT_APP_SERVER}/plants/${plantId}`, {
            method: "PATCH",
            body: formData,
            headers: {
                // "Accept": "application/json",
                Authorization: GET_TOKEN()
            }
        })
        .then(res => res.json())
        .then((plantJson) => {
            dispatch({
                type: SUCCESSFULLY_UPDATED_PLANT,
                payload: plantJson
            })
        });
    }
}

export const deletePlant = (plantId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_PLANT_SERVER })
        fetch(`${process.env.REACT_APP_SERVER}/plants/${plantId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: GET_TOKEN()
            },
            method: 'DELETE'
        })
        .then(() => {
            dispatch({
                type: SUCCESSFULLY_DELETED_PLANT,
                payload: plantId
            })
        });
    }
}

export const setPlantToActive = (plantId) => {
    return (dispatch) => {
        dispatch({ type: SET_CURRENT_PLANT, payload: plantId })
    }
}