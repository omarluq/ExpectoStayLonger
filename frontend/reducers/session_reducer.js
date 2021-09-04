import { RECEIVE_USER, LOGOUT_USER } from "../actions/session_actions";



const nullUser = {id: null}


const sessionReducer = (state = nullUser, action)=>{
    switch(action.type) {
        case RECEIVE_USER: 
            return {id: action.user.id}
        case LOGOUT_USER: 
            return nullUser
        default: 
            return state
    }
}


export default sessionReducer