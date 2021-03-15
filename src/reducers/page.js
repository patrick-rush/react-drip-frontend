// import {
//     SET_PAGE_TO_WELCOME,
//     SET_PAGE_TO_SHOW_PLANT
// } from '../actions';

// const initialState = {
//     leftHeader: "Plants",
//     rightHeader: ""
// };

// export default function pageReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_PAGE_TO_WELCOME: 
//             return {
//                 ...state,
//                 leftHeader: "Plants",
//                 rightHeader: ""
//             }
//         case SET_PAGE_TO_SHOW_PLANT: 
//             return {
//                 ...state,
//                 leftHeader: "Plants",
//                 rightHeader: "NAME"
//             }
//         default:
//             return state;
//     }
// }