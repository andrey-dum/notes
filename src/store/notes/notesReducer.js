import { ADD_NOTE, DELETE_NOTE, SET_NOTES, SET_SELECTED, SHOW_ADD_FORM, SHOW_EDIT_FORM } from './actionTypes'

const initialState = {
    notes: [
        {id: 1, name: 'Note Title', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt repellendus beatae debitis, dolorum hic nostrum quis voluptate explicabo alias illo laudantium deserunt molestiae in amet corporis commodi dignissimos! Eius!'},
    ],
    selected: {},
    showAddForm: true,
    editMode: false,
}

export default function notesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_NOTES: 
            return {
                ...state,
                notes: action.notes
            }
        case ADD_NOTE: 
            return {
                ...state,
                notes: [...state.notes, action.note],
                selected: action.note
            }
        case SET_SELECTED: 
            return {
                ...state,
                selected: action.selected,
                showAddForm: false,
                editMode: false
            }
        case SHOW_EDIT_FORM: 
            return {
                ...state,
                editMode: action.payload
            }
        case SHOW_ADD_FORM: 
            return {
                ...state,
                selected: {},
                showAddForm: action.payload
            }

        case DELETE_NOTE: 
            return {
                ...state,
                selected: {},
                notes: state.notes.filter(item => item.id !== action.noteId)
               
            }
        
        default:
            return state
    }
}

