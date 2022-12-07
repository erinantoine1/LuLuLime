import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import ProductBreakdown from './ProductBreakdown.jsx';
import StaticStars from './StaticStars.jsx';

const RatingBreakdown = ({ filterBy, setFilterBy }) => {

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
    <styling.RatingBreakdownDiv>
      <StaticStars stars={5} />
      <span> % Recommended</span>
      <styling.BarGraphDiv>
        <span>Bar Graph</span>
        {[...Array(5).keys()].reverse().map((stars, index) => {
          return (
            <StaticStars key={stars + 1} stars={stars + 1} onClick={() => toggleFilter(stars + 1)} />
          );
        })}
        {filterBy.length > 0 ? <span>{`Sorting By Reviews with ${filterBy} Star(s)`}</span> : null}
      </styling.BarGraphDiv>
      <button type="submit" onClick={() => resetFilters()}>Reset Filters</button>
      <ProductBreakdown />
    </styling.RatingBreakdownDiv>
  );
};

export default RatingBreakdown;
