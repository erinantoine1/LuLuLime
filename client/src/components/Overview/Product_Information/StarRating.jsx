/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

const Ratings = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #fafafa;
  overflow: hidden;
  width: fit-content;
  min-width: fit-content;
`;

const EmptyStars = styled.div`
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px #848484;
  }
`;

const FullStars = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: black;
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px black;
  }
  width: ${props => props.percentage}%;
`;

const StarRatingDiv = styled.div`
height: 1rem;
`;

const StarRating = ({ starRating }) => {
  const RatingDisplay = ' (Read all reviews)';

  const percentage = (starRating / 5) * 100;


  return (
    <StarRatingDiv>
      <Ratings>
        <EmptyStars size={12} />
        <FullStars percentage={percentage} size={12} />
      </Ratings>
      {RatingDisplay}
    </StarRatingDiv>
  );
};

export default StarRating;



