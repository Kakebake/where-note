import React from 'react';
import { useStateValue } from '../../../state';
import './NoteList.css';

const NoteList = props => {
  const [{ books, folders }, dispatch] = useStateValue();
  const { bookIndex } = props;
  const cooking = folders.cooking;

  console.log('The notes are', cooking);
  const keys = Object.keys(cooking);
  const listedStores = books[bookIndex].notes.map((note, index, array) => {
    console.log('The note is', note);
    console.log('The index is', index);
    console.log('The array is', array);
    return (
      <li key={note.name}>
        <input
          type="checkbox"
          checked={note.checked}
          onChange={() => {
            array[index].checked = !array[index].checked;
            console.log('The new array is', array);
            dispatch({ type: 'setNotes', notes: array, bookIndex });
          }}
        />
        {note.name}
      </li>
    );
  });

  return <ul>{listedStores}</ul>;
};

export default NoteList;
