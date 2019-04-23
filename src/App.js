import React, {Component} from 'react';
import {Route, Switch, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './App.css'
import ListOfNotes from './notes/ListOfNotes';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }

  componentDidMount() {
    this.setState({
      folders: this.props.store.folders,
      notes: this.props.store.notes
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to={'/'}><h1>Noteful</h1></NavLink>
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
            <Route
              exact
              path='/:folderId/:noteId'
              render={({match})=>{console.log(match)
                return (
                  <React.Fragment>
                    <Sidebar folders={this.state.folders} match={match}/>
                    <ListOfNotes match={match} notes={this.state.notes}/>
                  </React.Fragment>
                )
              }}
            />
            <Route 
              path='/:folderId'
              render={({match})=>{console.log(match)
                return (
                  <React.Fragment>
                    <Sidebar folders={this.state.folders}/>
                    <ListOfNotes match={match} notes={this.state.notes}/>
                  </React.Fragment>
                )
            }}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
