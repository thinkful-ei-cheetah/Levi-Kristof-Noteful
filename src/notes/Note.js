import React from 'react';
// import {Route} from 'react-router-dom';

export default function Note(props) {
  return (
    <li className={props.note.id}>
        <h3>{props.note.name}</h3>
        <p>{props.note.modified}</p>
        <button>Delete Note</button>
    </li>
  );
}