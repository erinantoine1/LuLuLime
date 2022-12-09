import React, { useState } from 'react';
import axios from 'axios';

const NewQuestionForm = ({ newQuestion, loadQuestions, toggleNewQuestion, product_id }) => {

  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
        question, name, email, product_id
      })
        .then(() => {
          loadQuestions();
        })
        .then(() => {
          toggleNewQuestion();
        });
    }
  };

  return (
    <div>
      {!newQuestion ? null : (
        <div>
          <input
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
        </div>
      )}
    </div>
  );
};

export default NewQuestionForm;
