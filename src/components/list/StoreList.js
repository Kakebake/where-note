import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const StoreList = stores => {
  const listedStores = stores.stores.map(store => (
    <li key={store.id}>
      <Link to={`/store/${store.id}`} className="List-link">
        {store.name}
      </Link>
    </li>
  ));

  return <ul>{listedStores}</ul>;
};

export default StoreList;
