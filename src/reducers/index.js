import {combineReducers} from 'redux';
import authenticationReducer from './authentication.reducer'
import notesReducer from './notes.reducer'

const rootReducer = combineReducers({
    creds: authenticationReducer,
    note: notesReducer
})

export default rootReducer;