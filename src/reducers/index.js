import {combineReducers} from 'redux';
import plantsReducer from './plants';
import pageReducer from './page';
import eventsReducer from './events';

export default combineReducers({
    plants: plantsReducer,
    page: pageReducer,
    events: eventsReducer
});