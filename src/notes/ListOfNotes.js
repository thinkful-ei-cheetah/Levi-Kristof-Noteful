import React from 'react';
// import {Route} from 'react-router-dom';

import Note from './Note';

export default function ListOfNotes(props) {

  const notes = () => {
    let filteredNotes = props.notes.filter(note =>
      {
    if (note.folderId === props.match.params.folderId) return true;
      
  }).map(note => <li key ={note.id}> <Note  note={note}/> </li>)

  console.log(filteredNotes)
  return (
    <ul className="ListOfNotes">{filteredNotes}</ul>
  )
};


    // const list = props.notes.map(note =>
    //     <li><Note note={note} /> </li>);
    // const addButtonOrDesc = () => {
    //     if (props.singleNoteDisplay === null) {
    //         return <button>Add note</button>
    //     }
    //     else {
    //         return <p>{props.singleNoteDisplay.content}</p>}
    // };
  return (
    <div className="ListOfNotesWrapper">
        {notes()}
      <div className="addButton">
        <button>Add note</button>
        {/* {addButtonOrDesc()} */}
      </div>
    </div>
  );
}