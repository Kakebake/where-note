import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <div>
        <div>Map</div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <StandaloneSearchBox
            defaultCenter
            defaultZoom
            onPlacesChanged={() => console.log()}
          >
            <input
              type="text"
              placeholder="Name or address"
              style={{
                boxSizing: `border-box`,
                border: `1px solid`,
                width: `240px`,
                height: `32px`,
                marginTop: `27px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`
              }}
            />
          </StandaloneSearchBox>
          {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </div>
    );
  })
);

Map.propTypes = {};

export default Map;
