import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import LimePicture from './components/RelatedItemsComparisons/images/happylime.png';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';
import { StarContext } from './components/RatingsReviews/Utils.js';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AppBackground = styled.div`
  background-color: ${props => props.change ? '#EAFAF1' : 'black'};
  font-family: Helvetica;
`;

const AppContainer = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0);
  border-bottom: solid 1px rgba(0, 0, 0, 0);
  margin-left: 4%;
  margin-right: 4%;
  background-color:  ${props => props.change ? '#EAFAF1' : 'grey'};
`;

const LogoContainer = styled.div`
  display: flex;
  height: 90%;
  align-items: center;
  gap: 5%;
  margin-left: 10%;
`;

const Logo = styled.img`
  height: 90%;
  float: left;
`;

const Header = styled.div`
  background-color: teal;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: fixed;
  z-index: 9999;
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

const NavContainer = styled.div`
  display: flex;
  gap: 1%;
  width: 40%;
  margin-right: 10%;
`;

const HeaderButtons = styled(Buttons)`
  background-color: #bfe3b4;
  color: black;
  border: teal;
  &: hover{
    cursor: pointer;
  }
  font-size: 1rem;
  border: none;
  height: 60%;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  border: solid 1px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  padding-left: 1%;
`;

const LoadingScreen = styled.div`
  z-index: 9998;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #EAFAF1;
  color: black;
  display flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const LoadingLogo = styled.img`
  animation: ${rotate} 2s linear infinite;
  margin-top: 20%;
`;

const App = () => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentID, setCurrentID] = useState(40344);
  const [appStyles, setAppStyles] = useState({});
  const [theme, setTheme] = useState(false);
  const [starRating, setStarRatings] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Context
  const starControl = useMemo(() => ({ starRating, setStarRatings }), []);

  return (
    <AppBackground change={!theme}>
      {!dataLoaded ? (
        <LoadingScreen>
          <LoadingLogo src={LimePicture} alt="lime" />
        </LoadingScreen>
      ) : null}
      <Header>
        <LogoContainer>
          <Logo src={LimePicture} alt="lime" />
          <h1 style={{ fontSize: '3rem', color: '#bfe3b4', float: 'left' }}>Lululime</h1>
        </LogoContainer>
        <NavContainer>
          <HeaderButtons>Home</HeaderButtons>
          <HeaderButtons>Products</HeaderButtons>
          <HeaderButtons>Contact Us</HeaderButtons>
          <SearchInput type="text" placeholder="Search..." />
        </NavContainer>
      </Header>
      <AppContainer change={!theme}>
        <Overview currentID={currentID} starRating={starRating} dataLoaded={dataLoaded} setDataLoaded={setDataLoaded} />
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
