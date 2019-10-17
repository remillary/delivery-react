import { SET_USERNAME, SHADE, USER_LOGIN_POPUP } from './actions-types'

export function setShade(isShaded) {
    return dispatch => {
        dispatch({
            type: SHADE,
            payload: isShaded
        })
    }
}

export function openLoginPopup() {
    return dispatch => {
        setShade(true)(dispatch)
        dispatch({
            type: USER_LOGIN_POPUP,
            payload: true
        })
    }
}

export function closeLoginPopup() {
    return dispatch => {
        setShade(false)
        dispatch({
            type: USER_LOGIN_POPUP,
            payload: false
        })
    }
}

export function setUsername(username) {
    return dispatch => {
        dispatch({
            type: SET_USERNAME,
            payload: username
        })
    }
}