import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';
import generateChoices from './Utils.js';

const ProductBreakdown = ({ characteristic }) => {
  const characteristicName = characteristic[0];
  const characteristicRating = Math.floor((characteristic[1].value));
  const choices = generateChoices(characteristicName);

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
