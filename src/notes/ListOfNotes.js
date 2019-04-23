import React from 'react';
// import {Route} from 'react-router-dom';

import Note from './Note';

export default function ListOfNotes(props) {
    const list = props.notes.map(note =>
        <Note note={note} />);
    const addButtonOrDesc = () => {
        if (props.singleNoteDisplay === null) {
            return <button>Add note</button>
        }
        else {
            return <p>{props.singleNoteDisplay.content}</p>}
    };
  return (
    <div className="ListOfNotesWrapper">
      <ul className="ListOfNotes">
        {list}
      </ul>
      <div className="addButtonOrDesc">
        {addButtonOrDesc()}
      </div>
    </div>
  );
}