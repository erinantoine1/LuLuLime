import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import ProductBreakdown from './ProductBreakdown.jsx';
import StaticStars from './StaticStars.jsx';

const RatingBreakdown = ({ filterBy, setFilterBy, metaData }) => {

  const [averageRating, setAverageRating] = useState(0);
  const [percentRecommend, setPercentRecommend] = useState(0);

  const getPercentRecommend = (recommends) => {
    let totalVoters = 0;
    let totalTrue = 0;

    Object.entries(recommends).forEach((vote) => {
      if (vote[0] === 'true') {
        totalTrue += Number(vote[1]);
      }
      totalVoters += Number(vote[1]);
    });
    return Math.round((totalTrue / totalVoters) * 100);
  };

  const getAverageRating = (ratings) => {
    let totalVoters = 0;
    let totalRating = 0;
    Object.entries(ratings).forEach((pair) => {
      totalVoters += Number(pair[1]);
      totalRating += (Number(pair[0]) * Number(pair[1]));
    });
    return Math.round((totalRating / totalVoters) * 10) / 10;
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

  useEffect(() => {
    setAverageRating(getAverageRating(metaData.ratings));
    setPercentRecommend(getPercentRecommend(metaData.recommended));
  }, []);

  return (
    <styling.RatingBreakdownDiv>
      <h3>{`Average Rating: ${averageRating}`} </h3>
      <StaticStars rating={averageRating} size={18} />
      <h3> {`${percentRecommend}% Recommended`}</h3>
      <styling.BarGraphDiv>
        <span>Bar Graph</span>
        {[5, 4, 3, 2, 1,].map((rating, index) => {
          return (
            <StaticStars key={rating} rating={rating} size={18} onClick={() => toggleFilter(rating)} />
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
