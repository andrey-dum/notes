import { ADD_NOTE, DELETE_NOTE, SET_NOTES, SET_SELECTED, SHOW_ADD_FORM, SHOW_EDIT_FORM } from './actionTypes'


export function showEdit(payload) {
    return {
        type: SHOW_EDIT_FORM,
        payload
    }
}

export function showAddFrom(payload) {
    return {
        type: SHOW_ADD_FORM,
        payload
    }
}

export function setNotes(notes) {
    return {
        type: SET_NOTES,
        notes
    }
}

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    } 
}

export function setSelected(selected) {
    return {
        type: SET_SELECTED,
        selected
    }
}

export function deleteItem(noteId) {
    return {
        type: DELETE_NOTE,
        noteId
    }
}


export function updateNote(updatedItem) {
    return (dispatch, getState) => {
        const {notes} = getState()
        
        const newItems = notes.notes.map(note => {
            if(note.id === updatedItem.id) {
                return updatedItem
            }
            return note
        })
        dispatch(setNotes(newItems))
        dispatch(setSelected(updatedItem))
        dispatch(showEdit(false))
    }
}