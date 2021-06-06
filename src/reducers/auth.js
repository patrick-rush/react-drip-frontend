import {
    LOG_IN,
    LOG_OUT,
    CHECK_LOGIN_STATUS,
    AUTHENTICATED,
    NOT_AUTHENTICATED
} from '../actions';

const initialState = {
    currentUser: {},
    loggedIn: false,
    authChecked: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: true,
                currentUser: action.payload
            }
        case NOT_AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: false,
                currentUser: {}
            }
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
                currentUser: {},
                loggedIn: false
            };
        default:
            return state;
    }
}