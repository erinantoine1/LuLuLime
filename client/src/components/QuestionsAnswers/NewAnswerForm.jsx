import React, { useState } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';


const NewAnswerForm = ({ loadAnswers, toggleNewAnswer, question_id }) => {

  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [visible, setVisible] = useState(true);

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

  const handleCancel = () => {
    setVisible(true);
    toggleNewAnswer();
  };

  return (
    <styling.QAFormContainer
      onClick={
        () => {
          setVisible(false);
          toggleNewAnswer();
        }
      }
      out={!visible}
      onAnimationEnd={() => !visible}
    >
      <styling.styledForm out={!visible} onClick={(event) => event.stopPropagation()}>
        <h2>Ask a question</h2>
        <styling.textAreaDiv>
          <textarea
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
          <button onClick={handleCancel}>Cancel</button>
        </styling.textAreaDiv>
      </styling.styledForm>
    </styling.QAFormContainer>
  );
};

export default NewAnswerForm;
