import React, { useState } from 'react';
import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';

const App = () => {

  const [currentID, setCurrentID] = useState(40344);

  const setNewProduct = (newProduct) => {
    setCurrentID(newProduct);
  };

  return (
    <div>
      <Overview currentID={40346} />
      <RelatedItemsComparisons currentID={currentID} setNewProduct={setNewProduct} />
      <QuestionsAnswers currentID={currentID} />
      <RatingsReviews currentID={currentID} />
    </div>
  );
};

export default App;

