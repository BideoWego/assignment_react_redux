import { connect } from 'react-redux';
import serialize from 'form-serialize';
import { createItem } from '../actions';
import AddItem from '../components/AddItem';




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
  null,
  mapDispatchToProps
)(AddItem);




export default AddItemContainer;









