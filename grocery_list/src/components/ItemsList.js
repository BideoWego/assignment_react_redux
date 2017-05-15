import React from 'react';
import PropTypes from 'prop-types';
import PurchaseButton from './PurchaseButton';




const ItemsList = (props) => {
  const {
    items,
    purchaseItem
  } = props;

  const itemsList = items.map((item) => (
    <div className="card" key={ `item-${ item.id }` }>
      <img
        className="card-img-top img-fluid"
        src="http://placehold.it/256x256"
        alt="Placeholder" />
      <div className="card-block">
        <h4>Name: { item.name }</h4>
        <h5>Category: { item.category }</h5>
        <p>Description: { item.description }</p>

        <PurchaseButton
          purchased={ item.purchased }
          onClick={ () => purchaseItem(item.id) } />
      </div>
    </div>
  ));

  const noItems = (
    <p className="text-muted">No Items...</p>
  );

  return (
    <div className="ItemsList container">
      <div className="card-deck">
        { items.length > 0 ? itemsList : noItems }
      </div>
    </div>
  );
};


ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  purchaseItem: PropTypes.func.isRequired
};




export default ItemsList;









