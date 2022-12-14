import React, { useState } from 'react';

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
    <div>
      <input type='text' placeholder='What is your question?' onChange={handleInput} />
    </div>
  );
};

export default SearchQuestions;
