import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { addNote} from '../store/notes/actions'

export const AddNoteForm = () => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const addNoteHandler = () => {
        if(name, text) {
            const noteObj = {
                id: Date.now(),
                name, 
                text
           }
            dispatch(addNote(noteObj))
            setName('')
            setText('')
       }
    }

    return (
        <div className="addNoteForm form">
            <h2>Добавить заметку</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя заметки"
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="10"
                placeholder="Введите текст заметки"
            />
            <button className="btn" onClick={addNoteHandler} disabled={!name}>
                Добавить
            </button>
        </div>
    )
}
