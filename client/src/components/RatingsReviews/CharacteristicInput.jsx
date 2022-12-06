import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';

const CharacteristicInput = ({ characteristic }) => {
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
        <label htmlFor={characteristicName}>
          1
          <input type="radio" name={characteristicName} />
        </label>
        <label htmlFor={characteristicName}>
          2
          <input type="radio" name={characteristicName} />
        </label>
        <label htmlFor={characteristicName}>
          3
          <input type="radio" name={characteristicName} />
        </label>
        <label htmlFor={characteristicName}>
          4
          <input type="radio" name={characteristicName} />
        </label>
        <label htmlFor={characteristicName}>
          5
          <input type="radio" name={characteristicName} />
        </label>
      </styling.characteristicsButtons>
      <styling.characteristicsChoices>
        <span>{choices[1]}</span>
        <span>{choices[5]}</span>
      </styling.characteristicsChoices>
    </styling.characteristicsDiv>
  );
};

export default CharacteristicInput;
