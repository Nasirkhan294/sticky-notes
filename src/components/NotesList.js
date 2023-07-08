import React from 'react'
import Note from './Note';
const NotesList = (props) => {
	const keepSearchMatches = (note) => note.doesMatchSearch;
	const filterSearches = props.notes.filter(keepSearchMatches);
	const renderNote = (note) => <Note onType={props.onType} note={note} key={note.id} />
	const noteElements = filterSearches.map(renderNote)
	return (
		<ul className="notes-list">
			{noteElements}
		</ul>
	)
}

export default NotesList