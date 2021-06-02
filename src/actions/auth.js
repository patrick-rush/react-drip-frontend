import {
    LOG_IN,
    LOG_OUT,
    CHECK_LOGIN_STATUS
} from '.';

const TOKEN = sessionStorage.getItem('token')

export const signupUser = (user) => {
    return (dispatch) => {
        fetch("http://localhost:3000/signup", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    email: user.email,
                    password: user.password
                }
            })
        })
            .then((res) => {
                if (res.ok) {
                    sessionStorage.setItem("token", res.headers.get("Authorization"));
                    return dispatch({ type: LOG_IN, payload: res.json() });
                } else {
                    throw new Error(res);
                }
            })
            .then((json) => console.dir(json))
            .catch((err) => console.dir(err));
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        fetch("http://localhost:3000/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    email: user.email,
                    password: user.password,
            },
        }),
    })
        .then((res) => {
            if (res.ok) {
                sessionStorage.setItem("token", res.headers.get("Authorization"));
                return dispatch({ type: LOG_IN, payload: res.json() });
            } else {
                throw new Error(res);
            }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOG_OUT })
    }
}

export const checkLoginStatus = () => {
    if (TOKEN) {
        return (dispatch) => {
            dispatch({ type: CHECK_LOGIN_STATUS, payload: true })
        }
    } else {
        return (dispatch) => {
            dispatch({ type: CHECK_LOGIN_STATUS, payload: false })
    }
    }
}

// export const fetchEvents = () => {
//     return (dispatch) => {
//         dispatch({ type: START_CONTACTING_EVENT_SERVER })
//         return fetch(`${process.env.REACT_APP_SERVER}/care_events`)
//             .then((res) => res.json())
//             .then((eventsJson) => {
//                 dispatch({
//                     type: SUCCESSFULLY_LOADED_EVENTS,
//                     payload: eventsJson
//                 })
//             });
//     };
// };
