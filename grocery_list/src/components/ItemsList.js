import React from 'react';
import PropTypes from 'prop-types';




const ItemsList = (props) => {
  const { items } = props;

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
        <p>Status: { item.purchased ? 'Purchased' : 'Available' }</p>
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
  items: PropTypes.array.isRequired
};




export default ItemsList;









