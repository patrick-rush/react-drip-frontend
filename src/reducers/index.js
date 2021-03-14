import {combineReducers} from 'redux';
import plantsReducer from './plants';
import pageReducer from './page';

export default combineReducers({
    plants: plantsReducer,
    page: pageReducer
});