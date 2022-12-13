/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';

const AnswerEntry = ({ answer, loadAnswers }) => {

  const [helpfulPressed, setHelpfulPressed] = useState(false);

  const formatDate = () => {
    return new Date(answer.date).toDateString().slice(4);
  };

  const handleUpdate = (route) => {
    console.log(answer);
    axios.put(`/answer/${route}`, {
      answer_id: answer.answer_id
    })
      .then(() => {
        loadAnswers();
      })
      .then(() => {
        if (route === 'helpful') {
          setHelpfulPressed(true);
        }
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
      <span>
        <b>A</b>
        {`: ${answer.body}?`}
      </span>
      <br />
      <styling.AnswerDataContainer>
        <styling.AnswerButtons>
          <span>{`by ${answer.answerer_name}, ${formatDate()}`}</span>
          <span>|</span>
          <span>Helpful?</span>
          <styling.AnswersHelpfulContainer>
            {helpfulPressed ? null
              : <styling.YesButtons type="submit" onClick={setHelpful}>Yes</styling.YesButtons>}
            <span>{`(${answer.helpfulness})`}</span>
          </styling.AnswersHelpfulContainer>
          <span>|</span>
          <styling.ReportButton type="submit" onClick={report}>Report</styling.ReportButton>
        </styling.AnswerButtons>
      </styling.AnswerDataContainer>
      <styling.QAPhotos>
        {answer.photos.map((photo, index) => (
          <img key={index} src={photo.url} alt="Clothing product" width="100" height="100" />
        ))}
      </styling.QAPhotos>
    </div>
  );
};

export default AnswerEntry;


// <span>{`by ${answer.answerer_name}, ${formatDate()}`}</span>
//         <span>|</span>
//         <span>Helpful?</span>
//         {helpfulPressed ? null
//           : <styling.YesButtons type="submit" onClick={setHelpful}>Yes</styling.YesButtons>}
//         <span>{answer.helpfulness}</span>
//         <span>|</span>
//         <styling.ReportButton type="submit" onClick={report}>Report</styling.ReportButton>
