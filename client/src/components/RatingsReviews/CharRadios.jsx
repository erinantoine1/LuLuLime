import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';

const CharRadios = ({ characteristicName, characteristicId, reviewForm, setReviewForm }) => {

  const updateCharacteristics = (value) => {
    const newCharacteristics = { ...reviewForm.characteristics };
    newCharacteristics[characteristicId] = value;
    setReviewForm({ ...reviewForm, characteristics: newCharacteristics });
  };

  return (
    [...Array(5)].map((e, index) => (
      <label key={index} htmlFor={characteristicName}>
        {index + 1}
        <input
          type="radio"
          id={`${index + 1}-${characteristicName}`}
          name={characteristicName}
          value={index + 1}
          onChange={(event) => updateCharacteristics(event.target.value)}
        />
      </label>
    ))
  );
};

export default CharRadios;
