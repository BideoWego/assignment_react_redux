import { connect } from 'react-redux';
import CategorySelect from '../components/CategorySelect';
import { setCategoryFilter } from '../actions';


// Compare the current filter in state to the filter
// link container's own prop of filter to see if it
// is the active one
const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    defaultValue: ownProps.defaultValue,
    name: "category_filter"
  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      e.preventDefault();
      dispatch(setCategoryFilter(e.target.value));
    }
  }
}


const CategoryFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelect);




export default CategoryFilterContainer









