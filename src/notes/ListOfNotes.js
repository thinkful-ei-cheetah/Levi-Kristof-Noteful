import React from 'react';
// import {Route} from 'react-router-dom';

import Note from './Note';

export default function ListOfNotes(props) {
    const list = props.notes.map(note =>
        <li><Note note={note} /> </li>);
    // const addButtonOrDesc = () => {
    //     if (props.singleNoteDisplay === null) {
    //         return <button>Add note</button>
    //     }
    //     else {
    //         return <p>{props.singleNoteDisplay.content}</p>}
    // };
  return (
    <div className="ListOfNotesWrapper">
      <ul className="ListOfNotes">
        {list}
      </ul>
      <div className="addButton">
        <button>Add note</button>
        {/* {addButtonOrDesc()} */}
      </div>
    </div>
  );
}