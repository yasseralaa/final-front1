import types from '../actions/actionTypes'

export default function notesReducer(state={note:[]} ,  action) {
    switch(action.type) {
        case types.NEW_NOTE:
        const newNotes = [];
        newNotes.push(action.note)
        return {
            ...state,
            note: action.note
        }
        default:
            return state;
    }
}