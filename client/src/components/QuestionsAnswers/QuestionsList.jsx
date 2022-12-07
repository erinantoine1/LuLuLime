import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = ({ questions, loadQuestions }) => {

  return (
    questions.map((question, key) => (
      <div>
        <QuestionEntry
          question={question}
          loadQuestions={loadQuestions}
          key={key}
        />
      </div>
    ))
  );
};

export default QuestionsList;
