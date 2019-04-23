import React from 'react';
// import {Route} from 'react-router-dom';

import Note from './Note';

export default function ListOfNotes(props) {
  console.log(props.match.params.folderId);
  const notes = () => {
    let filteredNotes = props.notes.filter(note =>
      {
    if (note.folderId === props.match.params.folderId) return true;
      
  }).map(note => <Note note={note}/>)

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