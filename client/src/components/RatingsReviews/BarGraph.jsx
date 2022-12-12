import React from 'react';
import * as styling from './Styling/Styling.js';

const BarGraph = ({ rating, percentage, toggleFilter }) => {
  return (
    <styling.BarGraphDiv>
      <styling.BarGraphLabels>{`${rating} star`}</styling.BarGraphLabels>
      <styling.Meter onClick={() => toggleFilter(rating)}>
        <styling.Progress percentage={percentage}></styling.Progress>
      </styling.Meter>
      <styling.BarGraphLabels>{`${percentage}%`}</styling.BarGraphLabels>
    </styling.BarGraphDiv>
  );
};


export default BarGraph;