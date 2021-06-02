import {
    LOG_IN,
    LOG_OUT,
    CHECK_LOGIN_STATUS
} from '../actions';

const initialState = {
    currentUser: {},
    loggedIn: false,
    authChecked: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_LOGIN_STATUS: 
            return {
                ...state,
                loggedIn: action.payload,
                authChecked: true
            };
        case LOG_IN: 
            return {
                ...state,
                currentUser: action.payload,
                loggedIn: true
            };
        case LOG_OUT: 
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state;
    }
}