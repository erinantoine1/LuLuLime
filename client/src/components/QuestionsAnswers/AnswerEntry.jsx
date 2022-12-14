/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import AnswerPhoto from './AnswerPhoto.jsx';

const AnswerEntry = ({ answer, loadAnswers }) => {

  const [helpfulPressed, setHelpfulPressed] = useState(localStorage.getItem(`${answer.id}helpful`));

  const formatDate = () => {
    return new Date(answer.date).toDateString().slice(4);
  };

  const handleUpdate = (route) => {
    axios.put(`/answer/${route}`, {
      answer_id: answer.id
    })
      .then(() => {
        loadAnswers();
      });
  };

  const setHelpful = () => {
    handleUpdate('helpful');
    setHelpfulPressed(true);
    localStorage.setItem(`${answer.id}helpful`, true);
  };

  const report = () => {
    handleUpdate('report');
  };

  return (
    <styling.AnswerContainer>
      <span style={{ fontSize: '1.3rem' }}>
        <b>A</b>
        {`: ${answer.body}?`}
      </span>
      <br />
      <styling.AnswerButtons>
        <span>{`by ${answer.answerer_name}, ${formatDate()}`}</span>
        <span>|</span>
        <styling.AnswersHelpfulContainer>
          <span>Helpful?&nbsp;&nbsp;</span>
          {helpfulPressed ? null
            : <styling.YesButtons type="submit" onClick={setHelpful}>Yes</styling.YesButtons>}
          <span>{`(${answer.helpfulness})`}</span>
        </styling.AnswersHelpfulContainer>
        <span>|</span>
        <styling.ReportButton type="submit" onClick={report}>Report</styling.ReportButton>
      </styling.AnswerButtons>
      <styling.QAPhotos>
        {answer.photos.map((photo, key) => (
          <AnswerPhoto photo={photo} key={key} />
        ))}
      </styling.QAPhotos>
    </styling.AnswerContainer>
  );
};

export default AnswerEntry;
