/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';

const QuestionEntry = ({ question, loadQuestions }) => {

  const [answersShown, setAnswersShown] = useState(2);

  console.log(question.question_id);

  let answers = Object.values(question.answers);
  answers = answers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));

  const handleUpdate = (route) => {
    const parameters = { question_id: question.question_id };
    console.log(parameters);
    console.log(`/question/${route}`);
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
      <text>
        <b>Q</b>
        {`: ${question.question_body}?`}
      </text>
      <text>{'\nHelpful? '}</text>
      <button onClick={setHelpful}>Yes</button>
      <text>{` ${question.question_helpfulness}`}</text>
      <text> | </text>
      <button onClick={report}>Report</button>
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
