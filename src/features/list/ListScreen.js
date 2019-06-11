import React from 'react';
import { useStateValue } from '../../state';
import { StoreList, BrandList } from '../../components/list';
import './ListScreen.css';

const ListScreen = () => {
  const [{ stores, brands }] = useStateValue();

  return (
    <div className="ListScreen">
      <div className="ListScreen-leftList">
        <p className="ListScreen-listHeader">Stores</p>
        <StoreList stores={stores} />
      </div>
      <div className="ListScreen-rightList">
        <p className="ListScreen-listHeader">Brands</p>
        <BrandList brands={brands} />
      </div>
    </div>
  );
};

ListScreen.propTypes = {};

export default ListScreen;
