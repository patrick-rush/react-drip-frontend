import {
    SET_TOKEN,
    GET_TOKEN,
    AUTHENTICATED, 
    NOT_AUTHENTICATED
} from '.';

export const signupUser = (credentials) => {
    return (dispatch) => {
        fetch("http://localhost:3000/signup", {
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: credentials })
        })
            .then((res) => {
                if (res.ok) {
                    SET_TOKEN(res.headers.get('Authorization'));
                    return res
                        .json()
                        .then((userJson) => {
                            dispatch({ type: AUTHENTICATED, payload: userJson })
                        })
                } else {
                    return res.json().then((errors) => {
                        dispatch({ type: NOT_AUTHENTICATED })
                        return Promise.reject(errors);
                    })
                }
            })
    }
}

export const loginUser = (credentials) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/login", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: credentials }),
    })
        .then((res) => {
            if (res.ok) {
                SET_TOKEN(res.headers.get('Authorization'))
                return res
                    .json()
                    .then((userJson) => 
                        dispatch({ type: AUTHENTICATED, payload: userJson })
                    )
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED })
                    return Promise.reject(errors);
                })
            }
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        return fetch("http://localhost:3000/logout", {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: GET_TOKEN()
            }
        })
            .then((res) => {
                if (res.ok) {
                    return dispatch({ type: NOT_AUTHENTICATED })
                } else {
                    return res.json().then((errors) => {
                        dispatch({ type: NOT_AUTHENTICATED })
                        return Promise.reject(errors)
                    })
                }
            })
    }
}

export const checkAuth = () => {
    return (dispatch) => {
        return fetch("http://localhost:3000/current_user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: GET_TOKEN()
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json().then(user => dispatch({type: AUTHENTICATED, payload: user }))
                } else {
                    return Promise.reject(dispatch({ type: NOT_AUTHENTICATED }))
                }
            })
    }
}