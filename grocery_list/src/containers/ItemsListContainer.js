import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';


const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};


const ItemsListContainer = connect(
  mapStateToProps
)(ItemsList);




export default ItemsListContainer;










