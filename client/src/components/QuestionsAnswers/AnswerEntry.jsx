/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';

const AnswerEntry = ({ answer, loadQuestions }) => {

  const handleUpdate = (route, answer_id) => {
    axios.put(`/qa/answers/:${question_id}/${route}`, {
      question_id
    })
      .then(() => {
        loadQuestions();
      });
  };

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
