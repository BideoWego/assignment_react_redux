import React from 'react';
import PropTypes from 'prop-types';


const CategorySelect = (props) => {
  const {
    includeEmpty,
    onChange,
    categories,
    name
  } = props;

  const optionsElements = categories.map((category) => {
    return (
      <option
        key={ `category-${ category }` }
        value={ category }>
        { category }
      </option>
    );
  });

  if (includeEmpty) {
    optionsElements.unshift(
      <option key="empty" value=""></option>
    );
  }

  return (
    <select
      name={ name }
      className="form-control"
      onChange={ onChange }>
      { optionsElements }
    </select>
  );
}


CategorySelect.propTypes = {
  includeEmpty: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
};




export default CategorySelect;









