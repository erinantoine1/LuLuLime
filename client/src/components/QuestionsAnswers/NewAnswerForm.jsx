import React, { useState } from 'react';
import axios from 'axios';

const NewAnswerForm = ({ newAnswer, loadAnswers, toggleNewAnswer, question_id }) => {

  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (answer.length > 0 && name.length > 0 && email.length > 0) {
      axios.post('/answers', {
        question_id, body: answer, name, email, photos
      })
        .then(() => {
          loadAnswers();
        })
        .catch(() => {
          console.log('failed');
        })
        .then(() => {
          toggleNewAnswer();
        });
    }
  };

  return (
    <div>
      {!newAnswer ? null : (
        <div>
          <input
            type='textarea'
            placeholder='What is your answer?'
            onChange={handleAnswer}
          />
          <input
            placeholder='Nickname?'
            onChange={handleName}
          />
          <input
            placeholder='Email?'
            onChange={handleEmail}
          />
          <input
            placeholder='Photos'
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default NewAnswerForm;
