import React from 'react';
import PropTypes from 'prop-types';


const SortSelect = (props) => {
  const {
    onChange,
    fields
  } = props;

  const optionsElements = fields.map((field) => {
    return (
      <option
        key={ `sort-${ field }` }
        value={ field }>
        { field }
      </option>
    );
  });

  return (
    <select
      name="sort_by"
      className="form-control"
      onChange={ onChange }>
      <option value=""></option>
      { optionsElements }
    </select>
  );
}


SortSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired
};




export default SortSelect;









