import React, {useState} from 'react';
import * as styling from './Styling/Styling.js';
import BarGraph from './BarGraph.jsx';
import Search from './Search.jsx';

const Filters = ({ filterBy, setFilterBy, metaData, totalRatings, searchText, setSearchText }) => {

  const [filtersVisible, setFiltersVisible] = useState(false);

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
    !filtersVisible && setFiltersVisible(true);
  };

  const resetFilters = () => {
    setFilterBy([]);
  };

  return (
    <styling.FiltersDiv>
      <h3>Filters</h3>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <styling.BarGraphContainer>
        {[5, 4, 3, 2, 1,].map((rating, index) => {
          return (
            <BarGraph key={rating} rating={rating} percentage={getPercentRating(rating)} toggleFilter={toggleFilter} />
          );
        })}
      </styling.BarGraphContainer>
      {filtersVisible && (
        <styling.sortingByDiv out={filterBy.length === 0} onAnimationEnd={() => filterBy.length === 0 && setFiltersVisible(false)}>
          {`Sorting By Reviews with ${[...filterBy].sort()} Star(s)`}
          <styling.ResetFiltersButton type="button" onClick={() => resetFilters()}>Reset Filters</styling.ResetFiltersButton>
        </styling.sortingByDiv>
      )}
    </styling.FiltersDiv>
  );
};

export default Filters;
