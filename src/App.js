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

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
        />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
