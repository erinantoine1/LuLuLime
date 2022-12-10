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
      <span>{`by ${answer.answerer_name}, ${formatDate()}   |   Helpful?  `}</span>
      {helpfulPressed ? null
        : <button onClick={setHelpful}>Yes</button>}
      <span>{`  ${answer.helpfulness}  `}</span>
      <span> | </span>
      <button onClick={report}>Report</button>
      <styling.QAPhotos>
        {answer.photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt="Clothing product" width="100" height="100" />
        ))}
      </styling.QAPhotos>
    </div>
  );
};

export default AnswerEntry;
