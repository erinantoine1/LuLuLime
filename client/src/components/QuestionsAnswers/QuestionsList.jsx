import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import * as styling from './Styling.js';

const QuestionsList = ({ questions, loadQuestions }) => {

  return (
    questions.map((question, index) => (
      <styling.QATileDiv key={index}>
        <QuestionEntry
          question={question}
          loadQuestions={loadQuestions}
        />
      </styling.QATileDiv>
    ))
  );
};

export default QuestionsList;
