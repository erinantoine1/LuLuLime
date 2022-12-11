import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';

const CharRadios = ({ characteristicName, characteristicId, reviewForm, setReviewForm, choices }) => {

  const [checkedValue, setCheckedValue] = useState(0);

  const updateCharacteristics = (value) => {
    const newCharacteristics = { ...reviewForm.characteristics };
    newCharacteristics[characteristicId] = value;
    setReviewForm({ ...reviewForm, characteristics: newCharacteristics });
    setCheckedValue(value);
  };

  return (
    [...Array(5)].map((e, index) => (
      <styling.RadioButtonDiv key={index}>
        <label htmlFor={characteristicName}>
          {index + 1}
          <styling.RadioInput
            type="radio"
            id={`${index + 1}-${characteristicName}`}
            name={characteristicName}
            value={index + 1}
            onChange={(event) => updateCharacteristics(Number(event.target.value))}
          />
        </label>
        <styling.RadioLabels>
          {(index + 1 === 1 && choices[index + 1]) || (index + 1 === 5 && choices[index + 1]) || (index + 1 === checkedValue && choices[checkedValue])}
        </styling.RadioLabels>
      </styling.RadioButtonDiv>
    ))
  );
};

export default CharRadios;
