import React, { useEffect } from 'react';
import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';
import RelatedItemsComparisons from './components/RelatedItemsComparisons/RelatedItemsComparisons.jsx';


const App = () => {
  return (
    <div>
      {/* <Overview />
      <RelatedItemsComparisons />
      <QuestionsAnswers /> */}
      <RatingsReviews />
    </div>
  );
};

export default App;
