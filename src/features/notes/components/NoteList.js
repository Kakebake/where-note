import React, { useState } from 'react';
import { useStateValue } from '../../../state';
import './NoteList.css';

const NoteList = props => {
  const [{ books }, dispatch] = useStateValue();
  const [newNote, setNewNote] = useState('');
  const { bookIndex } = props;

  const handleNewNoteChange = e => {
    setNewNote(e.target.value);
  };

  const handleNewNoteSubmit = event => {
    event.preventDefault();
    setNewNote('');
    const notes = books[bookIndex].notes.slice();
    if (notes.find(note => note.name === newNote)) {
      console.log('Already exists');
    } else {
      notes.push({
        name: newNote,
        checked: false
      });

      dispatch({
        type: 'setNotes',
        notes: notes,
        bookIndex
      });
    }
  };

  const listedStores = books[bookIndex].notes.map((note, index, array) => {
    return (
      <li key={note.name}>
        <input
          type="checkbox"
          checked={note.checked}
          onChange={() => {
            array[index].checked = !array[index].checked;
            dispatch({ type: 'setNotes', notes: array, bookIndex });
          }}
        />
        {note.name}
      </li>
    );
  });

  return (
    <div>
      <ul>{listedStores}</ul>
      <form onSubmit={handleNewNoteSubmit}>
        <input type="text" value={newNote} onChange={handleNewNoteChange} />
      </form>
    </div>
  );
};

export default NoteList;
