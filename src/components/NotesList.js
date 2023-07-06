import React from 'react'
import Note from './Note';
const NotesList = (props) => {
	const renderNote = (note) => <Note note={note} key={note.id} />
	const noteElements = props.notes.map(renderNote)
	return (
		<ul className="notes-list">
			{noteElements}
		</ul>
	)
}

export default NotesList