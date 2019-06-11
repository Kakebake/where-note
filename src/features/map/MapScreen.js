import React from 'react';

import { Map } from './Components';

const MapScreen = () => {
  return (
    <div>
      <div>MapScreen</div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACupBGTNuSFEjjao9Vi6FKISGlZt2fomU"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

MapScreen.propTypes = {};

export default MapScreen;
