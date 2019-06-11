import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const BrandList = brands => {
  const listedBrands = brands.brands.map(brand => (
    <li key={brand.id}>
      <Link to={`/brand/${brand.id}`} className="List-link">
        {brand.name}
      </Link>
    </li>
  ));

  return <ul>{listedBrands}</ul>;
};

export default BrandList;
