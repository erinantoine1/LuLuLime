import React from 'react';
import * as styling from './Styling/Styling.js';

const BarGraph = ({ rating, percentage, toggleFilter }) => {
  return (
    <styling.BarGraphDiv>
      <div>{`${rating} star`}</div>
      <styling.Meter onClick={() => toggleFilter(rating)}>
        <styling.Progress percentage={percentage}></styling.Progress>
      </styling.Meter>
      <div>{`${percentage}%`}</div>
    </styling.BarGraphDiv>
  );
};


export default BarGraph;