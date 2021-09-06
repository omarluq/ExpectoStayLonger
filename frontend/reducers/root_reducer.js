import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import listingsReducer from './listings_reducer'


const rootReducer = combineReducers({
    user: userReducer,
    session: sessionReducer,
    errors: sessionErrorsReducer, 
    listings: listingsReducer
    
})

export default rootReducer