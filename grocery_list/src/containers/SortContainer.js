import { connect } from 'react-redux';
import SortSelect from '../components/SortSelect';
import { setSortByField } from '../actions';


// Compare the current filter in state to the filter
// link container's own prop of filter to see if it
// is the active one
const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.fields
  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      e.preventDefault();
      dispatch(setSortByField(e.target.value));
    }
  }
}


const CategoryFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortSelect);




export default CategoryFilterContainer









