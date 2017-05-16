import React from 'react';
import PropTypes from 'prop-types';


const FilterLink = (props) => {
  const {
    onClick,
    active,
    children
  } = props;

  if (active) {
    return <span>{ children }</span>;
  }

  return (
    <a href="#" onClick={ onClick }>
      { children }
    </a>
  );
}


FilterLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};




export default FilterLink;









