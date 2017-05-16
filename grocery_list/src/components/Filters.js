import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import CategoryFilterContainer from '../containers/CategoryFilterContainer';
import SortContainer from '../containers/SortContainer';


const Filters = () => (
  <div className="Filters">
    <h2>Filters:</h2>

    <FilterLinkContainer filter="SHOW_ALL">
      Show All
    </FilterLinkContainer>{ ', ' }

    <FilterLinkContainer filter="SHOW_AVAILABLE">
      Show Available
    </FilterLinkContainer>{ ', ' }

    <FilterLinkContainer filter="SHOW_PURCHASED">
      Show Purchased
    </FilterLinkContainer>

    <CategoryFilterContainer includeEmpty={ true } />

    <h2>Sort By</h2>
    <SortContainer />
  </div>
);




export default Filters;





