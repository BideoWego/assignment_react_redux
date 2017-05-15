import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';
import { purchaseItem } from '../actions';


const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    purchaseItem: (id) => {
      dispatch(purchaseItem(id));
    }
  };
};


const ItemsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);




export default ItemsListContainer;










