import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ListOfNotes from './notes/ListOfNotes';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    singleNoteDisplay: null,
  }

  componentDidMount() {
    this.setState({
      folders: this.props.store.folders,
      notes: this.props.store.notes
    })
  }
  notes = () => this.state.notes.filter(note =>{
    const folder = "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1";
    if (note.folderId===folder) return true;
  });
  render() {
    return (
      <div className="App">
        <header className="App-header">
        This is App.js
        </header>
        <main>
          <ListOfNotes notes={
            this.notes()} 
            singleNoteDisplay={this.state.singleNoteDisplay} />
        </main>
      </div>
    )
  }
}

export default App;
