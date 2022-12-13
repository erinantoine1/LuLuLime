import React, { useState } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';


const NewQuestionForm = ({ loadQuestions, toggleNewQuestion, product_id }) => {

  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(true);

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    if (question.length > 0 && name.length > 0 && email.length > 0) {
      event.preventDefault();
      axios.post('/questions', {
        body: question, name, email, product_id
      })
        .then(() => {
          loadQuestions();
        })
        .catch(() => {
          console.log('failed');
        })
        .then(() => {
          toggleNewQuestion();
        });
    }
  };

  const handleCancel = () => {
    setVisible(true);
    toggleNewQuestion();
  };

  return (
    <styling.QAFormContainer
      onClick={
        () => {
          setVisible(false);
          toggleNewQuestion();
        }
      }
      out={!visible}
      onAnimationEnd={() => !visible}
    >
      <styling.styledForm out={!visible} onClick={(event) => event.stopPropagation()}>
        <styling.textAreaDiv>
          <h2>Ask a question</h2>
          <styling.StyledTextArea
            cols="48"
            rows="8"
            type='textarea'
            placeholder='What is your answer?'
            onChange={handleQuestion}
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

export default NewQuestionForm;
