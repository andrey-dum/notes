import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegEdit } from 'react-icons/fa';
import { showEdit, updateNote } from '../store/notes/actions';
import { selectEditMode, selectSelected } from '../store/notes/selectors';


export const NotePage = () => {
    const dispatch = useDispatch()
    const editMode = useSelector(selectEditMode)
    const selected = useSelector(selectSelected)
    const [name, setName] = useState('');
    const [text, setText] = useState('');


    useEffect(() => {
        setName(selected.name)
        setText(selected.text)
    }, [selected]);


    const editNote = () => {
        const updated = {
            ...selected,
            name, 
            text
        }

        dispatch(updateNote(updated))
    }

    return (
        <div className="note">
            { !editMode ? 
                <>
                    <h1 className={'noteTitle'}># {selected.name} <span onClick={() => dispatch(showEdit(true))}><FaRegEdit /></span></h1>
                    <div className="noteText">
                        {selected.text}
                    </div>
                </> :
                <>
                    <h1 className={'noteTitle'}>Редактировать</h1>
                    <div className="form">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows="10"
                        />
                        <button className="btn" onClick={editNote}>
                            Обновить
                        </button>
                    </div>
                </>
            }

           
        </div>
    )
}
