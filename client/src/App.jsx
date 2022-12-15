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
  background-color: teal;
  width: 100%;
  height: 5rem;
  align-items: center;
  display: flex;
  padding-right: 10%;
  padding-left: 10%;
  justify-content: space-between;
`;

const Buttons = styled.button`
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

const HeaderButtons = styled(Buttons)`
  background-color: #bfe3b4;
  color: black;
  &: hover{
    cursor: pointer;
  }
  width: 30%;
  font-size: 1rem;
  border: none;
  height: 60%;
`;

const SearchInput = styled.input`
  width: 15%;
  font-size: 1.0625rem;
  height: 60%;
  border: solid 1px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  padding-left: 1%;
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
        <h1 style={{ fontSize: '3rem', color: '#bfe3b4' }}>Lululime</h1>
        <HeaderButtons>Home</HeaderButtons>
        <HeaderButtons>Products</HeaderButtons>
        <HeaderButtons>Contact Us</HeaderButtons>
        <SearchInput type="text" placeholder="Search..." />
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
