import React from 'react'

const Note = () => {
	return (
		<li className="note">
			<input className="note__title" type="text" placeholder="Title" />
			<textarea className="note__description" placeholder="Description..." />
			<span className="note__delete">X</span>
		</li>
	)
}

export default Note