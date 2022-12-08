import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';

const StaticStars = ({ rating, size, ...rootDOMAttributes }) => {

  const percentage = (rating / 5) * 100;

  return (
    <styling.Ratings {...rootDOMAttributes}>
      <styling.EmptyStars size={size}></styling.EmptyStars>
      <styling.FullStars percentage={percentage} size={size}></styling.FullStars>
    </styling.Ratings>
  );
};

export default StaticStars;
