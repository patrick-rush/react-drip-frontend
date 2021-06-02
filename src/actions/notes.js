import {
    START_CONTACTING_NOTE_SERVER,
    TOGGLE_SHOW_NOTE_FORM,
    SUCCESSFULLY_ADDED_NOTE,
    SUCCESSFULLY_LOADED_NOTES_BY_PLANT,
    SUCCESSFULLY_DELETED_NOTE
} from '.';

const TOKEN = sessionStorage.getItem('token')

export const fetchNotesByPlant = (plantId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_NOTE_SERVER })
        fetch(`${process.env.REACT_APP_SERVER}/plants/${plantId}/notes`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: TOKEN
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

export const toggleShowNoteForm = () => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SHOW_NOTE_FORM })
    }
}

export const createNote = (note) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_NOTE_SERVER })
        fetch(`${process.env.REACT_APP_SERVER}/notes`, {
            method: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                Authorization: TOKEN
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

export const deleteNote = (noteId) => {
    return (dispatch) => {
        dispatch({ type: START_CONTACTING_NOTE_SERVER })
        fetch(`${process.env.REACT_APP_SERVER}/notes/${noteId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: TOKEN
            },
            method: 'DELETE'
        })
        .then(() => {
            dispatch({
                type: SUCCESSFULLY_DELETED_NOTE,
                payload: noteId
            })
        });
    }
}
