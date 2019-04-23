import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Note(props) {
  return (
    <div>
        <div className={props.note.id}>
            <NavLink to={`/${props.note.folderId}/${props.note.id}`} activeClassName="selected-note">
                <h3>{props.note.name}</h3>
            </NavLink>
            <p>{props.note.modified}</p>
            <p>{props.children}</p>
            <button>Delete Note</button>
        </div>
    </div>
  );
}