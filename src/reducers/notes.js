import {
    START_LOADING_NOTES,
    TOGGLE_SHOW_NOTE_FORM,
    START_ADDING_NOTE,
    SUCCESSFULLY_ADDED_NOTE,
    SUCCESSFULLY_LOADED_NOTES_BY_PLANT,
    START_DELETING_NOTE,
    SUCCESSFULLY_DELETED_NOTE
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    // events: [],
    // currentEvent: null,
    showNoteForm: false,
    notesByCurrentPlant: []
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_NOTES: 
            return {
                ...state,
                loadingState: "inProgress"};
        case TOGGLE_SHOW_NOTE_FORM:
            return {
                ...state,
                showNoteForm: !state.showNoteForm
            }
        case START_ADDING_NOTE:
            console.log("got to START_ADDING_NOTE")
            return {
                ...state,
                loadingState: "inProgress"
            }
        case SUCCESSFULLY_ADDED_NOTE:
            console.log(action.payload)
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
        case START_DELETING_NOTE:
            return {
                ...state,
                loadingState: "inProgress"
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