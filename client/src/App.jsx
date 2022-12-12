import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';

const App = () => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentID, setCurrentID] = useState();
  const [appStyles, setAppStyles] = useState({});

  useEffect(() => {
    let current;
    axios.get('/firstItem')
      .then((response) => {
        console.log(response.data);
        setCurrentProduct(response.data);
        setCurrentID(response.data[0].id);
        current = response.data[0].id;
        return axios.get('/currentItem/styles', { params: { product_id: current } });
      })
      .then((response) => {
        console.log(response.data);
        setAppStyles(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* <RelatedItemsComparisons currentID={currentID} setCurrentID={setCurrentID} /> */}
      <RatingsReviews currentID={40346} />
    </div>
  );
};

export default App;
