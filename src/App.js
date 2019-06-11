import React from 'react';
import { useStateValue } from './state';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { MapScreen } from './features/map';
import { ListScreen } from './features/list';
import { StoreScreen } from './features/store';
import { BrandScreen } from './features/brand';

const App = () => {
  const [{ title }] = useStateValue();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{title}</h1>
        <p>{process.env.NODE_ENV}</p>
        <Link to="/map" className="App-link">
          Map
        </Link>
        <Link to="/list" className="App-link">
          List
        </Link>
        <Link to="/add" className="App-link">
          Add
        </Link>
        <Link to="/profile" className="App-link">
          Profile
        </Link>
      </header>
      <div>
        <Route path="/map" component={MapScreen} />
        <Route path="/list" component={ListScreen} />
        <Route path="/add" component={Add} />
        <Route path="/profile" component={Profile} />
        <Route path="/store" component={StoreScreen} exact />
        <Route path="/store/:id" component={StoreScreen} />
        <Route path="/brand" component={BrandScreen} exact />
        <Route path="/brand/:id" component={BrandScreen} />
      </div>
    </div>
  );
};

const Add = () => {
  return <p className="App-intro">Addadd</p>;
};

const Profile = () => {
  return <p className="App-intro">Profilefile</p>;
};

export default App;
