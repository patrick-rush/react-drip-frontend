// PLANTS
export const START_CONTACTING_PLANT_SERVER = "START_CONTACTING_PLANT_SERVER";
export const SUCCESSFULLY_LOADED_PLANTS = "SUCCESSFULLY_LOADED_PLANTS";
export const SUCCESSFULLY_ADDED_PLANT = "SUCCESSFULLY_ADDED_PLANT";
export const SUCCESSFULLY_UPDATED_PLANT = "SUCCESSFULLY_UPDATED_PLANT";
export const SUCCESSFULLY_DELETED_PLANT = "SUCCESSFULLY_DELETED_PLANT";
export const SET_CURRENT_PLANT = "SET_CURRENT_PLANT";
export const SUCCESSFULLY_LOADED_PLANT = "SUCCESSFULLY_LOADED_PLANT";

// EVENTS
export const START_CONTACTING_EVENT_SERVER = "START_CONTACTING_EVENT_SERVER";
export const SUCCESSFULLY_LOADED_EVENTS = "SUCCESSFULLY_LOADED_EVENTS";
export const SUCCESSFULLY_ADDED_EVENT = "SUCCESSFULLY_ADDED_EVENT";
export const SUCCESSFULLY_LOADED_EVENTS_BY_PLANT = "SUCCESSFULLY_LOADED_EVENTS_BY_PLANT";
export const SUCCESSFULLY_DELETED_EVENT = "SUCCESSFULLY_DELETED_EVENT";
export const SUCCESSFULLY_UPDATED_EVENT = "SUCCESSFULLY_UPDATED_EVENT";
export const SET_CURRENT_EVENT = "SET_CURRENT_EVENT";
export const TOGGLE_SHOW_EVENT_FORM = "TOGGLE_SHOW_EVENT_FORM";
export const CLEAR_EVENTS_BY_CURRENT_PLANT = "CLEAR_EVENTS_BY_CURRENT_PLANT";

// NOTES
export const START_CONTACTING_NOTE_SERVER = "START_CONTACTING_NOTE_SERVER";
export const SUCCESSFULLY_ADDED_NOTE = "SUCCESSFULLY_ADDED_NOTE";
export const SUCCESSFULLY_LOADED_NOTES_BY_PLANT = "SUCCESSFULLY_LOADED_NOTES_BY_PLANT";
export const SUCCESSFULLY_DELETED_NOTE = "SUCCESSFULLY_DELETED_NOTE";
export const TOGGLE_SHOW_NOTE_FORM = "TOGGLE_SHOW_NOTE_FORM";
export const CLEAR_NOTES_BY_CURRENT_PLANT = "CLEAR_NOTES_BY_CURRENT_PLANT";

// AUTH
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const CHECK_LOGIN_STATUS = "CHECK_LOGIN_STATUS";

// TOKEN
// export const TOKEN = sessionStorage.getItem('token');
export const SET_TOKEN = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
}
export const GET_TOKEN = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
    if (timeSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem('token');
    }
}
