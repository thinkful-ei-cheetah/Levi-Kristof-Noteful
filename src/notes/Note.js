import React from 'react';
// import {Route} from 'react-router-dom';

export default function Note(props) {
  return (
    <div className="Note">
        <h3>{props.note.name}</h3>
        <p>{props.note.modified}</p>
        <button className="del-btn">Delete Note</button>
    </div>
  );
}