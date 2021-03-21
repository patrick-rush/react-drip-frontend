import {combineReducers} from 'redux';
import plantsReducer from './plants';
import eventsReducer from './events';
import notesReducer from './notes';

export default combineReducers({
    plants: plantsReducer,
    events: eventsReducer,
    notes: notesReducer
});