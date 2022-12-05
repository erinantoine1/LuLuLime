/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const QuestionEntry = ({ question }) => {

  const [answersShown, setAnswersShown] = useState(2);

  let answers = Object.values(question.answers);
  answers = answers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));

  const getAnswers = answers.slice(0, answersShown);

  return (
    <div>
      <b>{`Q: ${question.question_body}?`}</b>
      {getAnswers.map((answer, key) => (
        <AnswerEntry answer={answer} key={key} />
      ))}
    </div>
  );
};

// question.propTypes = {
//   question_body: PropTypes.string.isRequired,
//   question_date: PropTypes.string.isRequired,
//   asker_name: PropTypes.string.isRequired,
// };

export default QuestionEntry;
