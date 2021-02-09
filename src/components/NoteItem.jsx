import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, setSelected } from '../store/notes/actions'
import { FaTrashAlt } from 'react-icons/fa';
import { selectSelected } from '../store/notes/selectors';

export const NoteItem = ({note}) => {
    const dispatch = useDispatch()
    const selected = useSelector(selectSelected)

    const handleSelect = (note) => {
        dispatch(setSelected(note))
    }

    const handleDelete = (noteId) => {
        dispatch(deleteItem(noteId))
    }

    return (
        <li 
            className={`${selected && selected.id === note.id ? 'noteItem active' : 'noteItem'}`}
        >
            <div 
                className="noteItem__name" 
                onClick={() => handleSelect(note)}>{note.name}
            </div> 
            <span 
                className="noteIcons" 
                onClick={() => handleDelete(note.id)}
            >
                <FaTrashAlt />
            </span>
        </li>
    )
}
