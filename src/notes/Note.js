import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Note(props) {
  return (
    <div className="single-note  Note">
        <div className={props.note.id}>
            <NavLink to={`/${props.note.folderId}/${props.note.id}`} activeClassName="selected-note">
                <h3>{props.note.name}</h3>
            </NavLink>
            <p>{props.note.modified}</p>
            <p>{props.children}</p>
            <button className="del-btn">Delete Note</button>
        </div>
    </div>
  );
}