import * as APIUtil from "../util/session_api_utl"


export const RECEIVE_USER = "RECEIVE_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS';



const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const logoutUser = () => ({
    type: LOGOUT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
  });


export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const login = user => dispatch => (
    APIUtil.login(user).then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const logout = () => dispatch => (
    APIUtil.logout().then(user => dispatch(logoutUser()),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)