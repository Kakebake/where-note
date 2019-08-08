import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Auth0Provider } from '../react-auth0-wrapper';
import config from '../auth_config.json';
import { StateProvider } from '../state';
import App from '../App';

const Root = () => {
  const initialState = {
    title: 'Notes',
    complete: false,
    editMode: false,
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
    const books = state.books.slice();
    switch (action.type) {
      case 'setNotes':
        books[action.bookIndex].notes = action.notes;
        return {
          ...state,
          books: books
        };
      case 'addBook':
        books.push({ name: action.book, notes: [] });
        console.log('Trying to add ', books);
        return {
          ...state,
          books
        };
      case 'removeBook':
        books.splice(action.index, 1);
        return {
          ...state,
          books
        };
      case 'toggleEditMode':
        return {
          ...state,
          editMode: !state.editMode
        };
      default:
        return state;
    }
  };

  // A function that routes the user to the right place
  // after login
  const onRedirectCallback = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Auth0Provider>
    </StateProvider>
  );
};

Root.propTypes = {};

export default Root;
