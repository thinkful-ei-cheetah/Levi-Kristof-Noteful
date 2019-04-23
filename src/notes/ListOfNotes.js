import React from 'react';
// import {Route} from 'react-router-dom';

import Note from './Note';

export default function ListOfNotes(props) {
  const renderNotes = () => {
    let filteredNotes = props.notes.filter(note =>{
    if (note.folderId === props.match.params.folderId) return true;
    }).map(note => <li key={note.id}><Note note={note}/></li>)

    return (
        <ul className="ListOfNotes">{filteredNotes}</ul>
    )
  };

  const renderSingleNote = () => {
    let filteredNote = props.notes.find(note =>
    note.id === props.match.params.noteId
    )
    
    return (
        <ul className="ListOfNote">
            <li key={filteredNote.id}>
                <Note note={filteredNote}>
                    {filteredNote.content}
                </Note>
            </li>
        </ul>
    )}
  console.log(props.match)
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
        {props.match.params.noteId ? renderSingleNote() : renderNotes()}
      <div className="addButton">
        <button>Add note</button>
      </div>
    </div>
  );
}