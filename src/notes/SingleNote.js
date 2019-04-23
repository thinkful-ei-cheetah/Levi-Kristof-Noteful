import React from 'react';
// import {Route} from 'react-router-dom';

import Note from './Note';

export default function SingleNote(props) {
  return (
    <div className="ListOfNotesWrapper">
      <ul className="ListOfNotes">
        <li><Note note={props.note} /></li>
      </ul>
      <div className="addButtonOrDesc">
        <p>{props.note.content}</p>
      </div>
    </div>
  );
}