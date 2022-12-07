import React, { useState } from 'react';
import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';

const App = () => {

  const [currendID, setCurrentID] = useState(40344);

  const setNewProduct = (newProduct) => {
    setCurrentID(newProduct);
  };

  return (
    <div>
      <Overview currentID={currendID} />
      <RelatedItemsComparisons currentID={currendID} setNewProduct={setNewProduct} />
      <QuestionsAnswers product={currendID} />
      <RatingsReviews product={currendID} />
    </div>
  );
};

export default App;
