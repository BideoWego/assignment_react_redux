import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';
import { purchaseItem } from '../actions';
import { default as _ } from 'lodash';


const filterItems = (items, filter) => {
  let filtered = {
    SHOW_ALL: items,
    SHOW_AVAILABLE: items.filter(item => !item.purchased),
    SHOW_PURCHASED: items.filter(item => item.purchased)
  }[filter];

  if (!filtered && filter) {
    filtered = items.filter(item => item.category === filter);
  }

  return filtered ? filtered : items;
};


const sortItems = (items, field) => {
  return _.sortBy(items, field);
};


const processItems = (items, state) => {
  const sorted = sortItems(items, state.itemSorters);
  const filtered = filterItems(sorted, state.itemFilters);
  return filtered;
};


const mapStateToProps = (state) => {
  return {
    items: processItems(state.items, state)
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










