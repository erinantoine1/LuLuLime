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


// {questions.length === 0 ? (
//   <QuestionsList
//     questions={questions}
//   />
// ) : null }


/* <QuestionsList
              questions={filtered ? filteredQuestions
                : questions.length < 0 ? [] : questions}
              loadQuestions={loadQuestions}
            /> */

// return (
//   <div>
//     <h2>Questions and Answers</h2>
//     <SearchQuestions doSearch={doSearch} />
//     {filtered ? questions.map((question, key) => (
//       <QuestionEntry question={question} key={key} />
//     ))}
//   </div>
// );


// const results = [{
//   question_id: 37,
//   question_body: 'Why is this product cheaper here than other sites?',
//   question_date: '2018-10-18T00:00:00.000Z',
//   asker_name: 'williamsmith',
//   question_helpfulness: 4,
//   reported: false,
//   answers: {
//     68: {
//       id: 68,
//       body: 'We are selling it here without any markup from the middleman!',
//       date: '2018-08-18T00:00:00.000Z',
//       answerer_name: 'Seller',
//       helpfulness: 4,
//       photos: [],
//     }
//   }
// },
// {
//   question_id: 38,
//   question_body: 'How long does it last?',
//   question_date: '2019-06-28T00:00:00.000Z',
//   asker_name: 'funnygirl',
//   question_helpfulness: 2,
//   reported: false,
//   answers: {
//     70: {
//       id: 70,
//       body: 'Some of the seams started splitting the first time I wore it!',
//       date: '2019-11-28T00:00:00.000Z',
//       answerer_name: 'sillyguy',
//       helpfulness: 6,
//       photos: [],
//     },
//     78: {
//       id: 78,
//       body: 'gsgahskjlhagkjlahsdg',
//       date: '2019-11-12T00:00:00.000Z',
//       answerer_name: 'iluvdogz',
//       helpfulness: 16,
//       photos: [],
//     },
//     74: {
//       id: 74,
//       body: 'Some of the seams started splitting the first time I wore it!',
//       date: '2019-11-28T00:00:00.000Z',
//       answerer_name: 'sillyguy',
//       helpfulness: 4,
//       photos: [],
//     },
//     79: {
//       id: 79,
//       body: '9 lives',
//       date: '2019-11-12T00:00:00.000Z',
//       answerer_name: 'iluvdogz',
//       helpfulness: 81,
//       photos: [],
//     }
//   }
// }];


// const loadQuestions = (page = 1) => {
//   const parameters = { product_id: currentID, page, count: questionsShown };
//   console.log(parameters);
//   return axios.get('/questions', {
//     params: parameters
//   })
//     .then((response) => {
//       console.log('this', response.data.results);
//       setQuestions(response.data.results);
//       console.log(questions);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };



// const showMoreQuestions = () => {
//   setQuestionsShown(questionsShown + 5);
//   loadQuestions();
// };

// useEffect(() => {
//   loadQuestions();
// }, [currentID]);

// const loadQuestions = (page = 1) => {
//   const parameters = { product_id: currentID, page, count: questionsShown };
//   return axios.get('/questions', {
//     params: parameters
//   });
// };

// const showMoreQuestions = () => {
//   loadQuestions()
//     .then((response) => {
//       setQuestions(response.data.results);
//     });
// };




{/* <styling.QASectionTopBorders>
<styling.QASectionSideBorders>
  <styling.QASectionContainer>
    <h1 style={{ fontSize: '3rem' }}>Questions and Answers</h1>
    {searchPressed ? (
      <SearchQuestions doSearch={doSearch} />
    ) : (
      <styling.Buttons type="submit" onClick={handleSearchPressed}>Search</styling.Buttons>
    )}
    <styling.QAInfoDiv>
      <QuestionsList
        questions={filtered ? filteredQuestions : getQuestions}
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
</styling.QASectionSideBorders>
</styling.QASectionTopBorders>
); */}
