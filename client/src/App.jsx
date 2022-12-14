import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';
import { StarContext } from './components/RatingsReviews/Utils.js';

const AppBackground = styled.div`
  background-color: ${props => props.change ? 'white' : 'black'};
`;

const AppContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  background-color:  ${props => props.change ? '#fafafa' : 'grey'};
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
      <AppContainer change={!theme}>
        <button type="button" onClick={() => setTheme(!theme)}>Change Theme</button>
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
