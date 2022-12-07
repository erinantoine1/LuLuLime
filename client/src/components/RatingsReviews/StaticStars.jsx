import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';

const StaticStars = ({ stars, ...rootDOMAttributes }) => {

  return (
    <div>
      {[...Array(stars)].map((star, index) => {
        return (
          <styling.StarFilled key={index} {...rootDOMAttributes}>&#9733;</styling.StarFilled>
        );
      })}
    </div>
  );
};

export default StaticStars;
