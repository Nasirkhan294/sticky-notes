import React, { Component } from "react";
import Header from './components/Header';
import NotesList from './components/NotesList'

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      },
    ],
    searchText: "Search"
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };

    this.setState({ notes: [newNote, ...this.state.notes] });
  }

  onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === 'title') {
          note.title = updatedValue;
          return note;
        }
        else {
          note.description = updatedValue;
          return note;
        }
      }
    })
    this.setState({notes: updatedNotes})
  }

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
        />
        <NotesList
          onType={this.onType}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
