import React, { useState } from 'react';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';
import * as styling from './Styling.js';

const QuestionEntry = ({ question, loadQuestions }) => {

  const [answersShown, setAnswersShown] = useState(2);

  let answers = Object.values(question.answers);
  answers = answers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));

  const handleUpdate = (route) => {
    axios.put(`/question/${route}`, {
      question_id: question.question_id
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

  const showAnswers = () => {
    setAnswersShown(answers.length);
  };

  const getAnswers = answers.slice(0, answersShown);

  return (
    <div>
      <styling.QATileHeader>
        <span>
          <b>Q</b>
          {`: ${question.question_body}?`}
        </span>
        <styling.QAHeaderButtons>
          <span>{'\nHelpful? '}</span>
          <button onClick={setHelpful}>Yes</button>
          <span>{` ${question.question_helpfulness}`}</span>
          <span> | </span>
          <button onClick={report}>Report</button>
        </styling.QAHeaderButtons>
      </styling.QATileHeader>
      {getAnswers.map((answer, key) => (
        <AnswerEntry
          answer={answer}
          loadQuestions={loadQuestions}
          key={key}
        />
      ))}
      <button onClick={showAnswers}>Load more answers</button>
    </div>
  );
};

// question.propTypes = {
//   question_body: PropTypes.string.isRequired,
//   question_date: PropTypes.string.isRequired,
//   asker_name: PropTypes.string.isRequired,
// };

export default QuestionEntry;
