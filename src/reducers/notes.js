import {
    START_CONTACTING_NOTE_SERVER,
    TOGGLE_SHOW_NOTE_FORM,
    SUCCESSFULLY_ADDED_NOTE,
    SUCCESSFULLY_LOADED_NOTES_BY_PLANT,
    SUCCESSFULLY_DELETED_NOTE
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    showNoteForm: false,
    notesByCurrentPlant: []
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case START_CONTACTING_NOTE_SERVER: 
            return {
                ...state,
                loadingState: "inProgress"};
        case TOGGLE_SHOW_NOTE_FORM:
            return {
                ...state,
                showNoteForm: !state.showNoteForm
            }
        case SUCCESSFULLY_ADDED_NOTE:
            return {
                ...state,
                loadingState: "successful",
                showNoteForm: false,
                notesByCurrentPlant: [...state.notesByCurrentPlant, action.payload]
            }
        case SUCCESSFULLY_LOADED_NOTES_BY_PLANT:
            return {
                ...state,
                loadingState: "successful",
                notesByCurrentPlant: action.payload
            }
        case SUCCESSFULLY_DELETED_NOTE:
            return {
                ...state,
                loadingState: "successful",
                notesByCurrentPlant: state.notesByCurrentPlant.filter(note => note.id !== action.payload)
            }
        default:
            return state;
    }
}