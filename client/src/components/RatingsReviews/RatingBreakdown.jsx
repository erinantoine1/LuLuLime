import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import ProductBreakdown from './ProductBreakdown.jsx';

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
      <span> Rating: Stars</span>
      <span> % Recommended</span>
      <styling.BarGraphDiv>
        <span>Bar Graph</span>
        <span onClick={() => toggleFilter(5)}>5 Stars</span>
        <span onClick={() => toggleFilter(4)}>4 Stars</span>
        <span onClick={() => toggleFilter(3)}>3 Stars</span>
        <span onClick={() => toggleFilter(2)}>2 Stars</span>
        <span onClick={() => toggleFilter(1)}>1 Star</span>
        <button type="submit" onClick={() => resetFilters()}>Reset Filters</button>
      </styling.BarGraphDiv>
      <ProductBreakdown />
    </styling.RatingBreakdownDiv>
  );
};

export default RatingBreakdown;
