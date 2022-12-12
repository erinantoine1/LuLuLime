import React, { useState, useEffect, useRef } from 'react';
import * as styling from './Styling/Styling.js';

const Search = ({ searchText, setSearchText }) => {
  return (
    <div>
      <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
      <button type="button" onClick={() => setSearchText('')}>Clear Search</button>
    </div>
  );
};

export default Search;
