import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';
import CharRadios from './CharRadios.jsx';
import generateChoices from './Utils.js';

const CharSection = ({ characteristic, reviewForm, setReviewForm }) => {
  const characteristicName = characteristic[0];
  const characteristicId = characteristic[1].id;
  const choices = generateChoices(characteristicName);


  return (
    <styling.CharDiv>
      <styling.CharNames>{`${characteristicName}: `}</styling.CharNames>
      <styling.RadioButtonsContainer>
        <CharRadios
          characteristicName={characteristicName}
          characteristicId={characteristicId}
          reviewForm={reviewForm}
          setReviewForm={setReviewForm}
          choices={choices}
        />
      </styling.RadioButtonsContainer>
    </styling.CharDiv>
  );
};

export default CharSection;
