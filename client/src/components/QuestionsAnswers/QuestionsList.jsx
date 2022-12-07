/* eslint-disable react/no-array-index-key */
import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = ({ questions }) => {

  return (
    questions.map((question, key) => (
      <QuestionEntry question={question} key={key} />
    ))
  );
};

export default QuestionsList;
