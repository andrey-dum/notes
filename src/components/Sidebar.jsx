import React from 'react'
import { useDispatch} from 'react-redux'
import { showAddFrom } from '../store/notes/actions'
import { IoMdAddCircleOutline } from 'react-icons/io';
import { NoteList } from './NoteList';

export const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <div className="brand"><h1>Notes</h1> <span className="brandIcon" onClick={() => dispatch(showAddFrom(true))}><IoMdAddCircleOutline /></span></div>
            <NoteList />
        </div>
    )
}
