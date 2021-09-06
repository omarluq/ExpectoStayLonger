import * as userAPI from "../util/user_api_util"

export const RECEIVE_USER = "RECEIVE_USER"



const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})



export const fetchUser = userId => dispatch => (
    userAPI.fetchUser(userId).then(user=> dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    )
)
