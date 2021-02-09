import React from 'react'
import { AddNoteForm } from './AddNoteForm'
import { useSelector } from 'react-redux'
import { NotePage } from './NotePage';
import { selectSelected } from '../store/notes/selectors';


export const Main = () => {
    const selected = useSelector(selectSelected)
    const isSelected = Object.keys(selected).length !== 0

    return (
        <div className="main">
            {!isSelected ? <AddNoteForm /> : <NotePage /> }
        </div>
    )
}
