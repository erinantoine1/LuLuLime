import React, { useState } from 'react';
import * as styling from './Styling.js';

const SearchQuestions = ({ doSearch, unfilter }) => {

  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setQuery(event.target.value);
    if (query.length >= 2) {
      doSearch(query);
    } else if (query.length === 1) {
      doSearch(null);
    }
  };

  return (
    <styling.QASearchDiv>
      <styling.QASearch
        type='text'
        placeholder='What is your question?'
        onChange={handleInput}
      />
    </styling.QASearchDiv>
  );
};

export default SearchQuestions;
