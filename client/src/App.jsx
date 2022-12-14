import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';
import { StarContext } from './components/RatingsReviews/Utils.js';

const AppBackground = styled.div`
  background-color: ${props => props.change ? '#EAFAF1' : 'black'};
`;

const AppContainer = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0);
  border-bottom: solid 1px rgba(0, 0, 0, 0);
  margin-left: 4%;
  margin-right: 4%;
  background-color:  ${props => props.change ? '#EAFAF1' : 'grey'};
`;

const Header = styled.div`
  border: 1px solid black;
  background-color: teal;
  width: 100%;
  height: 6rem;
  text-align: center;
  display: flex;
`;

export const Buttons = styled.button`
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: black;
  background-color: teal;
  color: white;
  width: 15%;
  overflow-wrap: break-word;
  min-width: fit-content;
  max-width: fit-content;
  &: hover{
    background-color: #bfe3b4;
    color: black;
    cursor: pointer;
  }
`;

const App = () => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentID, setCurrentID] = useState(40344);
  const [appStyles, setAppStyles] = useState({});
  const [theme, setTheme] = useState(false);
  const [starRating, setStarRatings] = useState(0);

  // Context
  const starControl = useMemo(() => ({ starRating, setStarRatings }), []);

  // useEffect(() => {
  //   let current;
  //   axios.get('/firstItem')
  //     .then((response) => {
  //       console.log(response.data);
  //       setCurrentProduct(response.data);
  //       setCurrentID(response.data[0].id);
  //       current = response.data[0].id;
  //       return axios.get('/currentItem/styles', { params: { product_id: current } });
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setAppStyles(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <AppBackground change={!theme}>
      <Header>
        <h1 style={{ fontSize: '3rem', color: '#bfe3b4', margin: 'auto' }}>Lululime</h1>
      </Header>
      <AppContainer change={!theme}>
        <Overview currentID={currentID} />
        <RelatedItemsComparisons currentID={currentID} setCurrentID={setCurrentID} />
        <QuestionsAnswers currentID={currentID} />
        <StarContext.Provider value={starControl}>
          <RatingsReviews currentID={currentID} />
        </StarContext.Provider>
      </AppContainer>
    </AppBackground>
  );
};

export default App;

// <Overview currentID={40346} />
