import React from 'react';
import PropTypes from 'prop-types';


const AddItem = (props) => {
  const { onSubmit } = props;

  return (
    <form className="container" onSubmit={ onSubmit }>
      <h2>Add an Item</h2>

      <div className="form-group">
        <label htmlFor="item_name">Name</label>
        <input type="text" className="form-control" name="item[name]" id="item_name" />
      </div>

      <div className="form-group">
        <label htmlFor="item_description">Description</label>
        <input type="text" className="form-control" name="item[description]" id="item_description" />
      </div>

      <div className="form-group">
        <label htmlFor="item_category">Category</label>
        <input type="text" className="form-control" name="item[category]" id="item_category" />
      </div>

      <div className="form-group">
        <label htmlFor="item_purchased">Purchased?</label>
        <input type="checkbox" className="form-control" name="item[purchased]" id="item_purchased" />
      </div>

      <div className="form-group">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
};


AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default AddItem;




