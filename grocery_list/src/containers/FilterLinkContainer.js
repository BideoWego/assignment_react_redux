import { connect } from 'react-redux';
import FilterLink from '../components/FilterLink';
import { setPurchasedFilter } from '../actions';


// Compare the current filter in state to the filter
// link container's own prop of filter to see if it
// is the active one
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.itemFilters === ownProps.filter
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault();
      dispatch(setPurchasedFilter(ownProps.filter));
    }
  }
}


const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);




export default FilterLinkContainer









