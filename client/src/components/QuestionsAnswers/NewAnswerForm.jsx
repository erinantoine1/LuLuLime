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

  const handleSubmit = (event) => {
    if (answer.length > 0 && name.length > 0 && email.length > 0) {
      event.preventDefault();
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

  const handleCancel = (e) => {
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
        <styling.textAreaDiv>

          <h2>Answer a question</h2>
          <styling.StyledTextArea
            cols="48"
            rows="8"
            type='textarea'
            placeholder='What is your answer?'
            onChange={handleAnswer}
          />
          <styling.StyledInput
            placeholder='Nickname?'
            onChange={handleName}
          />
          <styling.StyledInput
            placeholder='Email?'
            onChange={handleEmail}
          />
          <styling.StyledInput
            placeholder='Photos'
          />
          <styling.ButtonContainer>
            <styling.Buttons type="submit" onClick={handleSubmit}>Submit</styling.Buttons>
            <styling.Buttons type="submit" onClick={handleCancel}>Cancel</styling.Buttons>
          </styling.ButtonContainer>
        </styling.textAreaDiv>
      </styling.styledForm>
    </styling.QAFormContainer>
  );
};

export default NewAnswerForm;
