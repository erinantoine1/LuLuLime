import React from 'react';
import * as styling from './Styling/Styling.js';

const BarGraph = ({ rating, percentage, toggleFilter }) => {
  return (
    <styling.BarGraphDiv>
      <styling.BarGraphStarLabels onClick={() => toggleFilter(rating)}>{`${rating} star`}</styling.BarGraphStarLabels>
      <styling.Meter onClick={() => toggleFilter(rating)}>
        <styling.Progress percentage={percentage}></styling.Progress>
      </styling.Meter>
      <styling.BarGraphLabels onClick={() => toggleFilter(rating)}>{`${percentage}%`}</styling.BarGraphLabels>
    </styling.BarGraphDiv>
  );
};


export default BarGraph;