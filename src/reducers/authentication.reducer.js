
import types from '../actions/actionTypes'

export default function authenticationReducer(state = { creds: [] }, action) {
    switch (action.type) {
        case types.NEW_CRED:
            const newCreds = [...state.creds];

            newCreds.push(action.newCreds)
            return {
                ...state,
                creds: action.creds
            }
        default:
            return state;
    }
}