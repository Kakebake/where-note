import React from 'react';
import './NoteList.css';

const NoteList = notes => {
  console.log('The notes are', notes.notes);
  const listedStores = notes.notes.map(note => (
    <li key={note.name}>
      {note.checked}
      {note.name}
    </li>
  ));

  return <ul>{listedStores}</ul>;
};

export default NoteList;
