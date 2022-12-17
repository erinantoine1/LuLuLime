/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsList from './QuestionsList.jsx';
import NewQuestionForm from './NewQuestionForm.jsx';
import NewAnswerForm from './NewAnswerForm.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import * as styling from './Styling.js';

const QuestionsAnswers = ({ currentID }) => {

  const [questions, setQuestions] = useState([]);
  const [questionsRequested, setQuestionsRequested] = useState(100);
  const [questionsShown, setQuestionsShown] = useState(2);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [newQuestion, setNewQuestion] = useState(false);
  const [allQuestionsShown, setAllAnswersShown] = useState(false);
  const [searchPressed, setSearchedPressed] = useState(false);

  const loadQuestions = (page = 1) => {
    const parameters = { product_id: currentID, page, count: questionsRequested };
    axios.get('/questions', {
      params: parameters
    })
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadQuestions();
    setQuestionsShown(2);
  }, [currentID]);

  let getQuestions = Object.values(questions);

  const doSearch = (query) => {
    console.log(query);
    if (query) {
      const searchQs = getQuestions.filter((question) => (
        question.question_body.toLowerCase().includes(query.toLowerCase())
      ));
      setFiltered(true);
      if (searchQs.length > 0) {
        setFilteredQuestions(searchQs);
      }
    } else {
      setFiltered(false);
    }
  };

  const toggleNewQuestion = () => {
    setNewQuestion(!newQuestion);
  };

  const showMoreQuestions = () => {
    setQuestionsShown(questionsShown + 2);
  };

  if (!allQuestionsShown) {
    getQuestions = getQuestions.slice(0, questionsShown);
  }

  const handleSearchPressed = () => {
    setSearchedPressed(true);
  };

  return (
    <styling.QASectionTopBorders>
      <styling.QASectionContainer>
        <h1 style={{ fontSize: '2.6rem' }}>Questions and Answers</h1>
        {searchPressed ? (
          <SearchQuestions doSearch={doSearch} />
        ) : (
          <styling.Buttons type="submit" onClick={handleSearchPressed}>Search</styling.Buttons>
        )}
        <styling.QAInfoDiv>
          <QuestionsList
            questions={filtered ? filteredQuestions : getQuestions}
            loadQuestions={loadQuestions}
          />
        </styling.QAInfoDiv>
        <styling.ButtonContainer>
          <styling.Buttons type="submit" onClick={showMoreQuestions}>Load more questions</styling.Buttons>
          {!newQuestion ? null : (
            <NewQuestionForm
              loadQuestions={loadQuestions}
              toggleNewQuestion={toggleNewQuestion}
              product_id={currentID}
            />
          )}
          <styling.Buttons type="submit" onClick={toggleNewQuestion}>Add a question</styling.Buttons>
        </styling.ButtonContainer>
      </styling.QASectionContainer>
    </styling.QASectionTopBorders>
  );
};

export default QuestionsAnswers;
