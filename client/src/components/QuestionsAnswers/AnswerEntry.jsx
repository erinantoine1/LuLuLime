/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const AnswerEntry = ({ answer }) => {
  return (
    <div>
      <text>
        <b>A</b>
        {`: ${answer.body}?`}
      </text>
      <text>{`\nby ${answer.answerer_name}, ${answer.date}   |   Helpful? `}</text>
      <button>Yes</button>
      <text>{` ${answer.helpfulness}`}</text>
      <text> | </text>
      <button>Report</button>
    </div>
  );
};

export default AnswerEntry;
