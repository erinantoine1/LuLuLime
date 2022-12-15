import React, { useState, useEffect, useContext } from 'react';
import * as styling from './Styling/Styling.js';
import StaticStars from './StaticStars.jsx';
import { StarContext } from './Utils.js';

const RatingBreakdown = ({ metaData, totalRatings, currentID }) => {

  const { starRating, setStarRatings } = useContext(StarContext);

  const [averageRating, setAverageRating] = useState(0);
  const [percentRecommend, setPercentRecommend] = useState(0);

  const getPercentRecommend = () => {
    return Math.round((Number(metaData.recommended.true) / totalRatings) * 100);
  };

  const getAverageRating = (ratings) => {
    let totalRating = 0;
    Object.entries(ratings).forEach((pair) => {
      totalRating += (Number(pair[0]) * Number(pair[1]));
    });
    let roundedAverage = Math.round((totalRating / totalRatings) * 10) / 10;
    if (roundedAverage.toString().length === 1) {
      roundedAverage = roundedAverage.toFixed(1);
      return roundedAverage;
    }
    return roundedAverage;
  };

  useEffect(() => {
    setAverageRating(getAverageRating(metaData.ratings));
    setPercentRecommend(getPercentRecommend());
    setStarRatings(getAverageRating(metaData.ratings));
  }, [currentID, metaData]);

  return (
    <styling.RatingBreakdownDiv>
      <styling.AverageRatingDiv>
        <h3>{averageRating}</h3>
        <StaticStars rating={averageRating} size={17} />
      </styling.AverageRatingDiv>
      <h3>{`${percentRecommend}% Recommended`}</h3>
    </styling.RatingBreakdownDiv>
  );
};

export default RatingBreakdown;
