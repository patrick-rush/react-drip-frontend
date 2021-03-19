import {
    START_LOADING_NOTES,
    TOGGLE_SHOW_NOTE_FORM,
    START_ADDING_NOTE,
    SUCCESSFULLY_ADDED_NOTE,
    SUCCESSFULLY_LOADED_NOTES_BY_PLANT
} from '.';

// export const fetchNotes = () => {
//     return (dispatch) => {
//         dispatch({ type: START_LOADING_NOTES })
//         fetch(`http://localhost:3000/notes`)
//             .then((res) => res.json())
//             .then((eventsJson) => {
//                 dispatch({
//                     type: SUCCESSFULLY_LOADED_NOTES,
//                     payload: eventsJson
//                 })
//             });
//     };
// };

export const fetchNotesByPlant = (plantId) => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_NOTES })
        fetch(`http://localhost:3000/plants/${plantId}/notes`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((notesJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_NOTES_BY_PLANT,
                    payload: notesJson
                })
            });
    };
};

// export const setNoteToActive = (eventId) => {
//     return (dispatch) => {
//         dispatch({ type: SET_CURRENT_NOTE, payload: eventId })
//     }
// }

export const toggleShowNoteForm = () => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SHOW_NOTE_FORM })
    }
}

export const createNote = (note) => {
    return (dispatch) => {
        dispatch({ type: START_ADDING_NOTE })
        fetch("http://localhost:3000/notes", {
            method: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"    
            },
            body: JSON.stringify({note: note})
        })
            .then(res => res.json())
            .then((noteJson) => {
                dispatch({
                    type: SUCCESSFULLY_ADDED_NOTE,
                    payload: noteJson
                })
            });

    }
}
