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
    searchText: ""
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
    this.setState({ notes: updatedNotes })
  }

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    })

    this.setState({
      notes: updatedNotes,
      searchText: newSearchText
    })
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
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
