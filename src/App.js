import React from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './App.css'

class App extends React.Component{
  state={
    folders: [],
    notes: [],
    singleNote: null
  }

  componentDidMount(){
    this.setState({
      folders: this.props.data.folders
    })
  }

  render(){
    console.log('ssa')

    return (
      
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>
        <main>
          <Sidebar singleNote= {this.state.singleNote} folders={this.state.folders} />
        </main>
      </div>
    );
  };
}

export default App;
