import React from 'react';
import * as styling from './Styling/Styling.js';
import BarGraph from './BarGraph.jsx';

const Filters = ({ filterBy, setFilterBy, metaData, totalRatings }) => {

  const getPercentRating = (stars) => {
    return Math.round((Number(metaData.ratings[stars]) / totalRatings) * 100);
  };

  const toggleFilter = (value) => {
    if (filterBy.includes(value)) {
      setFilterBy(filterBy.filter((rating) => {
        return rating !== value;
      }));
    } else {
      setFilterBy([...filterBy, value]);
    }
  };

  const resetFilters = () => {
    setFilterBy([]);
  };

  return (
    <styling.FiltersDiv>
      <styling.BarGraphContainer>
        <h3>Filters</h3>
        {[5, 4, 3, 2, 1,].map((rating, index) => {
          return (
            <BarGraph key={rating} rating={rating} percentage={getPercentRating(rating)} toggleFilter={toggleFilter} />
          );
        })}
        {filterBy.length > 0 ? <span>{`Sorting By Reviews with ${[...filterBy].sort()} Star(s)`}</span> : null}
      </styling.BarGraphContainer>
      <styling.ResetFiltersButton type="button" onClick={() => resetFilters()}>Reset Filters</styling.ResetFiltersButton>
    </styling.FiltersDiv>
  );
};

export default Filters;
