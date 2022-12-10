import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';

const ProductBreakdown = ({ characteristic }) => {
  const choices = {};
  const characteristicName = characteristic[0];
  const characteristicRating = Math.floor((characteristic[1].value));
  if (characteristicName === 'Size') {
    choices[1] = 'A size too small';
    choices[5] = 'A size too wide';
  } else if (characteristicName === 'Width') {
    choices[1] = 'Too narrow';
    choices[5] = 'Too wide';
  } else if (characteristicName === 'Comfort') {
    choices[1] = 'Uncomfortable';
    choices[5] = 'Perfect';
  } else if (characteristicName === 'Quality') {
    choices[1] = 'Poor';
    choices[5] = 'Perfect';
  } else {
    choices[1] = 'Runs Short';
    choices[5] = 'Runs Long';
  }
  return (
    <styling.FactorBreakdownContainer>
      <styling.ProductBreakdownLabel>{characteristicName}</styling.ProductBreakdownLabel>
      <styling.IndicatorContainer>
        {[1, 2, 3, 4, 5].map((value, index) => {
          return (<styling.FactorContainer key={index} shading={value===characteristicRating}></styling.FactorContainer>);
        })}
      </styling.IndicatorContainer>
      <styling.FactorLabelsContainer>
        <styling.FactorLabels>{choices[1]}</styling.FactorLabels>
        <styling.FactorLabels>{choices[5]}</styling.FactorLabels>
      </styling.FactorLabelsContainer>
    </styling.FactorBreakdownContainer>
  );

};

export default ProductBreakdown;
