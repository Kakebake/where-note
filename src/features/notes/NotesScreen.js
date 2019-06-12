import React from 'react';
import { useStateValue } from '../../state';
import './NotesScreen.css';
import { NoteList } from './components';

const NotesScreen = () => {
  const [{ books }] = useStateValue();

  return (
    <div className="NotesScreen">
      <div className="NotesScreen-leftList">
        <p className="NotesScreen-listHeader">{books[0].name}</p>
        {<NoteList bookIndex="0" />}
      </div>
      <div className="NotesScreen-rightList">
        <p className="NotesScreen-listHeader">Brands</p>
      </div>
    </div>
  );
};

NotesScreen.propTypes = {};

export default NotesScreen;
