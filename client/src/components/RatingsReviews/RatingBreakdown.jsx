import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';
import StaticStars from './StaticStars.jsx';

const RatingBreakdown = ({ metaData, totalRatings }) => {

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
    return Math.round((totalRating / totalRatings) * 10) / 10;
  };

  useEffect(() => {
    setAverageRating(getAverageRating(metaData.ratings));
    setPercentRecommend(getPercentRecommend());
  }, []);

  return (
    <styling.RatingBreakdownDiv>
      <styling.AverageRatingDiv>
        <h3>{averageRating}</h3>
        <StaticStars rating={averageRating} size={16} />
      </styling.AverageRatingDiv>
      <h3>{`${percentRecommend}% Recommended`}</h3>
    </styling.RatingBreakdownDiv>
  );
};

export default RatingBreakdown;
