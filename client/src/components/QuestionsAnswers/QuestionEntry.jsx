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
  const [helpfulPressed, setHelpfulPressed] = useState(localStorage.getItem(`${question.question_id}helpful`));
  const [newAnswer, setNewAnswer] = useState(false);

  const loadAnswers = (page = 1) => {
    console.log('load answers called');
    const parameters = { question_id: question.question_id, page, count: answersRequested };
    axios.get('/answers', {
      params: parameters
    })
      .then((response) => {
        console.log(response.data.results);
        setAnswers(response.data.results);
      });
  };

  useEffect(() => {
    loadAnswers();
    localStorage.setItem(`${question.question_id}helpful`, false);
  }, [question]);

  let getAnswers = Object.values(question.answers);
  getAnswers = getAnswers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));

  console.log(getAnswers);

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
            <span style={{ fontSize: '1.7rem' }}>
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


/* <button onClick={report}>Report</button> */
// const [answers, setAnswers] = useState([]);
//   const [truncatedAnswers, setTruncatedAnswers] = useState([]);
//   const [answersShown, setAnswersShown] = useState(2);
//   const [getMoreAnswers, setGetMoreAnswers] = useState(5);
//   const [timesClicked, setTimesClicked] = useState(0);
//   const [allAnswersShown, setAllAnswersShown] = useState(false);
//   const [helpfulPressed, setHelpfulPressed] = useState(false);
//   const [newAnswer, setNewAnswer] = useState(false);

//   const truncateAnswers = () => {
//     const getAnswers = answers.slice(0, answersShown);
//     setTruncatedAnswers(getAnswers);
//     console.log('answers');
//     console.log(answers);
//   };

//   const sortAndProcessAnswers = () => {
//     let getAnswers = Object.values(answers);
//     getAnswers = answers.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));
//     console.log('this');
//     console.log(getAnswers);
//     setAnswers(getAnswers);
//     if (allAnswersShown) {
//       setAnswersShown(answers.length);
//     }
//     truncateAnswers();
//   };

//   const loadAnswers = (count = 5, page = 1) => {
//     const parameters = { question_id: question.question_id, page, count };
//     axios.get('/answers', {
//       params: parameters
//     })
//       .then((response) => {
//         console.log(response.data.results);
//         setAnswers(response.data.results);
//         // sortAndProcessAnswers();
//       });
//   };

//   useEffect(() => {
//     loadAnswers();
//   }, []);

//   const handleUpdate = (route) => {
//     axios.put(`/question/${route}`, {
//       question_id: question.question_id
//     })
//       .then(() => {
//         loadQuestions();
//       })
//       .then(() => {
//         if (route === 'helpful') {
//           setHelpfulPressed(true);
//         }
//       });
//   };

//   const setHelpful = () => {
//     handleUpdate('helpful');
//     setHelpfulPressed(true);
//   };

//   const report = () => {
//     handleUpdate('report');
//   };

//   const showAnswers = () => {
//     setAnswersShown(answersShown + 2);
//     if (timesClicked > 2 || answersShown >= answers.length) {
//       setGetMoreAnswers(getMoreAnswers + 5);
//       loadAnswers(getMoreAnswers);
//       setAllAnswersShown(true);
//     }
//     setTimesClicked(timesClicked + 1);
//   };

//   const toggleNewAnswer = () => {
//     setNewAnswer(!newAnswer);
//   };

//   return (
//     <div>
//       <styling.QATileHeader>
//         <span>
//           <b>Q</b>
//           {`: ${question.question_body}?`}
//         </span>
//         <styling.QAHeaderButtons>
//           <span>Helpful?</span>
//           {helpfulPressed ? null
//             : <button onClick={setHelpful}>Yes</button>}
//           <span>{`${question.question_helpfulness}  `}</span>
//           <span> | </span>
//           <button onClick={report}>Report</button>
//           <button onClick={toggleNewAnswer}>Add Answer</button>
//           <NewAnswerForm
//             newAnswer={newAnswer}
//             loadAnswers={loadAnswers}
//             toggleNewAnswer={toggleNewAnswer}
//             question_id={question.question_id}
//           />
//         </styling.QAHeaderButtons>
//       </styling.QATileHeader>
//       {answers.map((answer, key) => (
//         <AnswerEntry
//           answer={answer}
//           loadAnswers={loadAnswers}
//           key={key}
//         />
//       ))}
//       {allAnswersShown ? null
//         : <button onClick={showAnswers}>Load more answers</button>}
//     </div>
//   );



// {!answersShown
//   ? getAnswers.map((answer, key) => (
//     <AnswerEntry
//       answer={answer}
//       loadQuestions={loadQuestions}
//       key={key}
//     />
//   ))
//   : (
//     <styling.ScrollableAnswers>
//       {getAnswers.map((answer, key) => (
//         <AnswerEntry
//           answer={answer}
//           loadQuestions={loadQuestions}
//           key={key}
//         />
//       ))}
//     </styling.ScrollableAnswers>
//   )}
