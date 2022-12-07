/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const QuestionEntry = ({ question }) => {

  const [answersShown, setAnswersShown] = useState(2);

  let answers = Object.values(question.answers);
  answers = answers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));

  const showAnswers = () => {
    setAnswersShown(answers.length);
  };

  const getAnswers = answers.slice(0, answersShown);

  return (
    <div>
      <text>
        <b>Q</b>
        {`: ${question.question_body}?`}
      </text>
      <text>{'\nHelpful? '}</text>
      <button>Yes</button>
      <text>{` ${question.question_helpfulness}`}</text>
      {getAnswers.map((answer, key) => (
        <AnswerEntry answer={answer} key={key} />
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
