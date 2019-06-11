import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../state';
import './BrandScreen.css';

const BrandScreen = props => {
  const [{ brands }] = useStateValue();

  const brand = brands.find(brand => {
    return brand.id === props.match.params.id;
  });

  return (
    <div className="BrandScreen">
      {brand && (
        <div>
          <div>{brand.name}</div>
          <div>{brand.info}</div>
          <div>{brand.url}</div>
        </div>
      )}
      {!brand && (
        <div>
          <div>Brand not found.</div>
          <Link to="/list" className="App-link">
            List
          </Link>
        </div>
      )}
    </div>
  );
};

BrandScreen.propTypes = {};

export default BrandScreen;
