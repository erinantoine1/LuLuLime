import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import CharRadios from './CharRadios.jsx';

const CharSection = ({ characteristic, reviewForm, setReviewForm }) => {
  const choices = {};
  const characteristicName = characteristic[0];
  const characteristicId = characteristic[1].id;
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
    <styling.characteristicsDiv>
      <span>{characteristicName}</span>
      <styling.characteristicsButtons>
        <CharRadios
          characteristicName={characteristicName}
          characteristicId={characteristicId}
          reviewForm={reviewForm}
          setReviewForm={setReviewForm}
        />
      </styling.characteristicsButtons>
      <styling.characteristicsDescriptions>
        <span>{choices[1]}</span>
        <span>{choices[5]}</span>
      </styling.characteristicsDescriptions>
    </styling.characteristicsDiv>
  );
};

export default CharSection;
