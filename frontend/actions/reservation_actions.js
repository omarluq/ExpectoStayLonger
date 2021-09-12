import * as resAPI from "../util/reservation_api_util";


export const RECEIVE_RESEVATION = 'RECEIVE_RESEVATION'

export const DELETE_RESERVATION = 'DELETE_RESERVATION'


const receiveReservation = reservation => ({
    type: RECEIVE_RESEVATION,
    reservation
})


const removeReservation = resId => ({
    type: DELETE_RESERVATION,
    resId
})


export const createReservation = reservation => dispatch => (
    resAPI.createReservation(reservation).then(reservation=> dispatch(receiveReservation(reservation)))
)


export const deleteReservation = resId => dispatch => (
    resAPI.deleteReservation(resId).then(resId=>dispatch(removeReservation(resId)))
)