import React, { useState } from 'react';
import { useStateValue } from '../../state';
import './NotesScreen.css';
import { NoteList } from './components';

const NotesScreen = () => {
  const [{ books }, dispatch] = useStateValue();
  const [newBook, setNewBook] = useState('');

  const handleNewBookChange = e => {
    setNewBook(e.target.value);
  };

  const handleNewBookSubmit = event => {
    event.preventDefault();
    setNewBook('');
    if (books.find(book => book.name === newBook)) {
      console.log('Already exists');
    } else {
      dispatch({
        type: 'addBook',
        book: newBook
      });
    }
  };

  const booksComponent = books.map((book, index) => {
    return (
      <div className="NotesScreen-leftList" key={book.name}>
        <p className="NotesScreen-listHeader">{book.name}</p>
        {<NoteList bookIndex={index} />}
      </div>
    );
  });

  console.log('The books are', books);

  return (
    <div className="NotesScreen">
      {booksComponent}
      <div key="New book">
        <form onSubmit={handleNewBookSubmit}>
          <input type="text" value={newBook} onChange={handleNewBookChange} />
        </form>
      </div>
    </div>
  );
};

NotesScreen.propTypes = {};

export default NotesScreen;
