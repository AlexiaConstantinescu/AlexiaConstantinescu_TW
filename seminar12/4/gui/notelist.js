
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useEffect } from 'react'

import { getNotes, deleteNote } from '../actions/Actions'

const noteListSelector = state => state.list.notes

function NoteList(props) {

    const notes = useSelector(noteListSelector, shallowEqual)
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotes())
    }, [dispatch])

    return (
        <div>
            <div>
                <h3>List of notes</h3>
                {
                    notes.map(e => <div key={e.id}>{e.content}
                        <button
                            style={{ marginLeft: '10px' }}
                            onClick={() => dispatch(deleteNote(e.id))}
                        >
                            Delete
                        </button></div>)
                }
            </div>
        </div>
    )
}

export default NoteList
