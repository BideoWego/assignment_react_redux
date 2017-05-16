import { connect } from 'react-redux';
import serialize from 'form-serialize';
import { createItem } from '../actions';
import AddItem from '../components/AddItem';


const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const serialized = serialize(form, { hash: true });
      const data = {
        ...serialized.item,
        purchased: !!serialized.item.purchased
      };
      dispatch(createItem(data));
      form.reset();
    }
  };
};


const AddItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);




export default AddItemContainer;









