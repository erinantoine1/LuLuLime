import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';
import NewAnswerForm from './NewAnswerForm.jsx';
import * as styling from './Styling.js';

const QuestionEntry = ({ question, loadQuestions }) => {

  const [answers, setAnswers] = useState([]);
  const [answersRequested, setAnswersRequested] = useState(100);
  const [answersShown, setAnswersShown] = useState(2);
  const [timesClicked, setTimesClicked] = useState(0);
  const [allAnswersShown, setAllAnswersShown] = useState(false);
  const [helpfulPressed, setHelpfulPressed] = useState(localStorage.getItem(`${question.question_id}helpful`) || false);
  const [newAnswer, setNewAnswer] = useState(false);

  const loadAnswers = (page = 1) => {
    const parameters = { question_id: question.question_id, page, count: answersRequested };
    axios.get('/answers', {
      params: parameters
    })
      .then((response) => {
        setAnswers(response.data.results);
      });
  };

  useEffect(() => {
    loadAnswers();
  }, [question]);

  let getAnswers = Object.values(question.answers);
  getAnswers = getAnswers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));

  const handleUpdate = (route) => {
    axios.put(`/question/${route}`, {
      question_id: question.question_id
    })
      .then(() => {
        loadQuestions();
      });
  };

  const setHelpful = () => {
    handleUpdate('helpful');
    setHelpfulPressed(true);
    localStorage.setItem(`${question.question_id}helpful`, true);
  };

  const report = () => {
    handleUpdate('report');
  };

  const showAnswers = () => {
    setAnswersShown(answersShown + 2);
    if (timesClicked > 2 || answersShown >= answers.length) {
      loadAnswers(40);
      setAllAnswersShown(true);
    }
    setTimesClicked(timesClicked + 1);
  };

  if (!allAnswersShown) {
    getAnswers = getAnswers.slice(0, answersShown);
  }

  const toggleNewAnswer = () => {
    setNewAnswer(!newAnswer);
  };

  return (
    <styling.QATileDiv>
      <styling.QATileContent>
        <styling.QATileHeader>
          <styling.QABodyContainer>
            <span style={{ fontSize: '1.5rem' }}>
              <b>Q</b>
              {`: ${question.question_body}?`}
            </span>
          </styling.QABodyContainer>
          <styling.QuestionButtons>
            <styling.QAHeaderButtons>
              <styling.HelpfulSpan>Helpful?</styling.HelpfulSpan>
              <styling.QAHelpfulContainer>
                {helpfulPressed ? null
                  : <styling.YesButtons type="submit" onClick={setHelpful}>Yes</styling.YesButtons>}
                <styling.HelpfulSpan>{`(${question.question_helpfulness})`}</styling.HelpfulSpan>
              </styling.QAHelpfulContainer>
              <span>|</span>
              <styling.ReportButton type="submit" onClick={report}>Report</styling.ReportButton>
            </styling.QAHeaderButtons>
            <styling.Buttons type="submit" onClick={toggleNewAnswer}>Add Answer</styling.Buttons>
            {!newAnswer ? null : (
              <NewAnswerForm
                loadAnswers={loadAnswers}
                toggleNewAnswer={toggleNewAnswer}
                question_id={question.question_id}
              />
            )}
          </styling.QuestionButtons>
        </styling.QATileHeader>
        <styling.ScrollableAnswers>
          {getAnswers.map((answer, key) => (
            <AnswerEntry
              answer={answer}
              loadAnswers={loadAnswers}
              key={key}
            />
          ))}
        </styling.ScrollableAnswers>
        {allAnswersShown || answers.length < 2 ? null
          : <styling.Buttons type="submit" onClick={showAnswers}>Load more answers</styling.Buttons>}
      </styling.QATileContent>
    </styling.QATileDiv>
  );
};

export default QuestionEntry;

