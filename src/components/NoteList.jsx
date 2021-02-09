import React from 'react'
import { useSelector } from 'react-redux'
import { selectNoteItems } from '../store/notes/selectors'
import { NoteItem } from './NoteItem'

export const NoteList = () => {
    const notes = useSelector(selectNoteItems)

    return (
        <ul className="noteList">
            {notes && notes.map(note => 
                <NoteItem
                    key={note.id}
                    note={note}
                />
            )}
        </ul>
    )
}
