import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './App.css'
import ListOfNotes from './notes/ListOfNotes';
import SingleNote from './notes/SingleNote';

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
  note = () => this.state.notes.filter(note =>{
    const noteId = "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1";
    if (note.id === noteId) return true;
  })
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>
        <main>
          <Switch>
            <Route 
              exact
              path='/'
              render={()=>{
                return (
                  <div>
                    <Sidebar folders={this.state.folders}/>
                    <ListOfNotes notes={[]}/>
                  </div>

                )
              }}/>
          {/* <Sidebar folders={this.state.folders}/>
          <ListOfNotes 
            notes={this.notes()} 
            singleNoteDisplay={this.state.singleNoteDisplay} />
          <SingleNote note={this.note()} /> */}
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
