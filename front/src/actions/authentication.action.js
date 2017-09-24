import types from './actionTypes';

export function dispatchNewCred(creds){
    return dispatch => {
        dispatch({
            type: types.NEW_CRED,
            creds: creds
        });
    }
}