import React from 'react';
import { useStateValue } from '../../state';
import './NotesScreen.css';
import { NoteList } from './components';

const NotesScreen = () => {
  const [{ books }] = useStateValue();

  const booksComponent = books.map((book, index) => {
    return (
      <div className="NotesScreen-leftList" key={book.name}>
        <p className="NotesScreen-listHeader">{book.name}</p>
        {<NoteList bookIndex={index} />}
      </div>
    );
  });

  return <div className="NotesScreen">{booksComponent}</div>;
};

NotesScreen.propTypes = {};

export default NotesScreen;
