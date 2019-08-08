import React from 'react';
import { useStateValue } from './state';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { NotesScreen } from './features/notes';
import NavBar from './components/NavBar';
import { ProfileScreen } from './features/profile';

const App = () => {
  const [{ title }] = useStateValue();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{title}</h1>
        <p>{process.env.NODE_ENV}</p>
        <div style={{ backgroundColor: 'red', alignItems: 'row' }}>
          <Link to="/notes" className="App-link">
            Notes
          </Link>
          <Link to="/profile" className="App-link">
            Profile
          </Link>
        </div>
      </header>
      <div>
        <Route path="/notes" component={NotesScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <NavBar />
      </div>
    </div>
  );
};

export default App;
