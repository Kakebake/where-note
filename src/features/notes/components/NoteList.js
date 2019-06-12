import React from 'react';
import { useStateValue } from '../../../state';
import './NoteList.css';

const NoteList = props => {
  const [{ books, folders }, dispatch] = useStateValue();
  const { bookIndex } = props;
  const cooking = folders.cooking;

  console.log('The notes are', cooking);
  const keys = Object.keys(cooking);
  const listedStores = Object.values(cooking).map((note, index, array) => {
    console.log('The note is', note);
    console.log('The index is', index);
    console.log('The array is', array);
    return (
      <li key={note.name}>
        <input
          type="checkbox"
          checked={note.checked}
          onChange={() => {
            note.checked = !note.checked;
            dispatch();
          }}
        />
        {note.name}
      </li>
    );
  });

  return <ul>{listedStores}</ul>;
};

export default NoteList;
