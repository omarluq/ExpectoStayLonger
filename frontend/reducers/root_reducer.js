import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';


const rootReducer = combineReducers({
    sessionErrorsReducer,
    sessionReducer
})

export default rootReducer