import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider } from '../state';
import App from '../App';

const Root = () => {
  const initialState = {
    title: 'Where Fashion',
    complete: false,
    a: 'aaa',
    stores: [
      {
        id: 'hevnhevn',
        name: 'Hevn',
        streetAddress: 'Torggata 36 A',
        zipCode: '0183',
        city: 'Oslo',
        country: 'Norway',
        brands: ['Army Of Me', 'Avatar', 'Niløs', 'Norwegian Rain'],
        header: '',
        gallery: '',
        url: 'https://hevn.no/',
        info: 'This is a fashion store',
        latitude: '',
        longitude: ''
      },
      {
        id: 'rainrain',
        name: 'Norwegian Rain',
        streetAddress: 'Karl Johans gate 41B',
        zipCode: '0162',
        city: 'Oslo',
        country: 'Norway',
        brands: ['Norwegian Rain', 'T-Michael'],
        header: '',
        gallery: '',
        url: 'https://norwegianrain.com/',
        info: 'This is a fashion store',
        latitude: '',
        longitude: ''
      }
    ],
    brands: [
      {
        id: 'army',
        name: 'Army Of Me',
        info: 'This is a fashion brand',
        url: 'https://www.armyofmedesign.com/',
        shops: ['Hevn']
      },
      {
        id: 'avatar',
        name: 'Avatar',
        info: 'This is a fashion brand',
        url: 'http://www.fashion.com',
        shops: ['Hevn']
      },
      {
        id: 'nilos',
        name: 'Niløs',
        info: 'This is a fashion brand',
        url: 'http://www.julius-garden.jp/',
        shops: ['Hevn']
      },
      {
        id: 'rain',
        name: 'Norwegian Rain',
        info: 'This is a fashion brand',
        url: 'https://norwegianrain.com/',
        shops: ['Hevn', 'Norwegian Rain']
      },
      {
        id: 'tt',
        name: 'T-Michael',
        info: 'This is a fashion brand',
        url: 'https://www.t-michael.com/',
        shops: ['Norwegian Rain']
      }
    ]
  };

  const reducer = (state, action) => {
    switch (action.type) {
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
