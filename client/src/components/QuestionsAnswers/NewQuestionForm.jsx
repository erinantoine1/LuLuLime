import React, { useState } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';


const NewQuestionForm = ({ newQuestion, loadQuestions, toggleNewQuestion, product_id }) => {

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

  const handleSubmit = () => {
    if (question.length > 0 && name.length > 0 && email.length > 0) {
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
        <h2>Ask a question</h2>
        <styling.textAreaDiv>
          <textarea
            type='textarea'
            placeholder='What is your question?'
            onChange={handleQuestion}
          />
          <input
            placeholder='Nickname?'
            onChange={handleName}
          />
          <input
            placeholder='Email?'
            onChange={handleEmail}
          />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </styling.textAreaDiv>
      </styling.styledForm>
    </styling.QAFormContainer>
  );
};

export default NewQuestionForm;
