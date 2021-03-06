import React, { useState } from 'react';
import { useStateValue } from '../../../state';
import './NoteList.css';

const NoteList = props => {
  const [{ books, editMode }, dispatch] = useStateValue();
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

  const handleRemoveBookClick = () => {
    dispatch({
      type: 'removeBook',
      index: bookIndex
    });
  };

  const listedStores = books[bookIndex].notes.map((note, index, array) => {
    return (
      <div key={index}>
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
      </div>
    );
  });

  return (
    <div>
      <ul>{listedStores}</ul>
      <form onSubmit={handleNewNoteSubmit}>
        <input type="text" value={newNote} onChange={handleNewNoteChange} />
      </form>
      {editMode && <button onClick={handleRemoveBookClick}>Delete</button>}
    </div>
  );
};

export default NoteList;
