import { DELETE_REVIEW, RECEIVE_REVIEW } from "../actions/review_actions";


const reviewReducer = (state = {}, action) => {
    switch(action.type){
        case DELETE_REVIEW: 
            return {}
        case RECEIVE_REVIEW:
            return {...action.review}
        default: 
            return state
    }
}


export default reviewReducer