import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';
import CharRadios from './CharRadios.jsx';
import generateChoices from './Utils.js';

const CharSection = ({ characteristic, reviewForm, setReviewForm }) => {
  const characteristicName = characteristic[0];
  const characteristicId = characteristic[1].id;
  const choices = generateChoices(characteristicName);


  return (
    <styling.characteristicsDiv>
      <styling.CharNames>{`${characteristicName}: `}</styling.CharNames>
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
