import { RECEIVE_RESEVATION, DELETE_RESERVATION } from "../actions/reservation_actions"

const reservationReducer = (state={}, action) => {
    
    switch(action.type){
        case RECEIVE_RESEVATION:
            return {...action.reservation}
        case DELETE_RESERVATION:
            return {}
        default: 
            return state
    }
}

export default reservationReducer