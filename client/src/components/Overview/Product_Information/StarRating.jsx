/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

const StarRatingDiv = styled.div`
height: 1rem;
`;

const StarRating = () => {
  const RatingDisplay = 'Star Rating: ***** (Read all [#] reviews)';

  return (
    <StarRatingDiv>
      { RatingDisplay }
    </StarRatingDiv>
  );
};

export default StarRating;



