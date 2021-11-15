import { combineReducers } from 'redux'
import LoginDataReducer from './LoginDataReducers'
const rootReducers = combineReducers({

    LoginDataApiResponse:LoginDataReducer,
})

export default rootReducers;