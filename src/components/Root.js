import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider } from '../state';
import App from '../App';

const Root = () => {
  const initialState = {
    title: 'Where Fashion',
    complete: false,
    a: 'aaa',
    stores: [],
    books: [
      {
        name: 'Baking',
        notes: [
          { name: 'Buy ingredients', checked: true },
          { name: 'Bake cake', checked: false },
          { name: 'Eat cake', checked: false }
        ]
      },
      {
        name: 'Shopping',
        notes: [
          { name: 'Find store', checked: false },
          { name: 'Go to store', checked: false },
          { name: 'Buy clothes', checked: false }
        ]
      }
    ]
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setNotes':
        state.books[action.bookIndex].notes = action.notes;
        return {
          ...state,
          books: state.books
        };
      case 'addBook':
        const books = state.books.slice();
        books.push({ name: action.book, notes: [] });
        console.log('Trying to add ', books);
        return {
          ...state,
          books
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </StateProvider>
  );
};

Root.propTypes = {};

export default Root;
