import React from 'react';
import { useStateValue } from '../../state';
import './StoreScreen.css';
import { StoreList } from '../../components/list';

const StoreScreen = props => {
  const [{ stores }] = useStateValue();

  const store = stores.find(store => {
    return store.id === props.match.params.id;
  });

  return (
    <div className="StoreScreen">
      {store && (
        <div>
          <div>{store.name}</div>
          <div>{store.info}</div>
          <div>{store.url}</div>
        </div>
      )}
      {!store && <StoreList stores={props.api.stores} />}
    </div>
  );
};

StoreScreen.propTypes = {};

export default StoreScreen;
