import types from './actionTypes';


export function dispatchNewNote(note){
    return dispatch => {
        dispatch({
            type: types.NEW_NOTE,
            note: note
        });
    }
}