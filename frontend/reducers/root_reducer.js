import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';


const rootReducer = combineReducers({
    user: userReducer,
    session: sessionReducer,
    errors: sessionErrorsReducer
    
})

export default rootReducer