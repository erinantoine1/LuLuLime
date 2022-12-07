/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';

const AnswerEntry = ({ answer, loadQuestions }) => {

  const handleUpdate = (route) => {
    axios.put(`/answer/${route}`, {
      answer_id: answer.answer_id
    })
      .then(() => {
        loadQuestions();
      });
  };

  const setHelpful = () => {
    handleUpdate('helpful');
  };

  const report = () => {
    handleUpdate('report');
  };

  return (
    <div>
      <text>
        <b>A</b>
        {`: ${answer.body}?`}
      </text>
      <text>{`\nby ${answer.answerer_name}, ${answer.date}   |   Helpful? `}</text>
      <button onClick={setHelpful}>Yes</button>
      <text>{` ${answer.helpfulness}`}</text>
      <text> | </text>
      <button onClick={report}>Report</button>
    </div>
  );
};

export default AnswerEntry;
