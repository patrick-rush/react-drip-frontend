// import {
//     SET_PAGE_TO_WELCOME,
//     SET_PAGE_TO_SHOW_PLANT,
//     SET_CURRENT_PLANT
// } from '.';

// export const manageNavigation = (location, plantId) => {
//     return (dispatch) => {
//         if (location === "welcome") {
//             dispatch({ type: SET_PAGE_TO_WELCOME });
//         } else if (location === "plant") {
//             dispatch({ type: SET_PAGE_TO_SHOW_PLANT });
//             dispatch({ type: SET_CURRENT_PLANT, payload: plantId})
//         }
//     }
// }