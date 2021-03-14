import {
    SET_PAGE_TO_WELCOME,
    SET_PAGE_TO_SHOW_PLANT
} from '.';

export const manageNavigation = (location) => {
    return (dispatch) => {
        if (location === "welcome") {
            dispatch({ type: SET_PAGE_TO_WELCOME });
        } else if (location === "plant") {
            dispatch({ type: SET_PAGE_TO_SHOW_PLANT });
        }
    }
}