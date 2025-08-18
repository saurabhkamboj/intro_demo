import Note from './components/Note'
import noteServices from './services/notes'
import { useState, useEffect } from 'react'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteServices
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes)
      })
  }

  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteServices
      .create(noteObject)
      .then((returnedNote) => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter((note) => note.important)
  
  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id )
    const changedNote = { ...note, important: !note.important }

    noteServices
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => note.id === id ? returnedNote : note))
      })
      .catch(() => {
        alert(`the note; ${note.content} was already deleted from the server!`)
        setNotes(notes.filter((note) => note.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) =>
          <Note 
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App