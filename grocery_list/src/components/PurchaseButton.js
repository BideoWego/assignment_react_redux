import React from 'react';
import PropTypes from 'prop-types';


const PurchaseButton = (props) => {
  const { purchased, onClick } = props;

  if (purchased) {
    return <p className="text-muted">Purchased!</p>
  }

  return (
    <button
      className="btn btn-primary"
      onClick={ onClick }>
      Purchase Me!
    </button>
  );
};


PurchaseButton.propTypes = {
  purchased: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};




export default PurchaseButton;










