import React, { useState, useEffect, useRef } from 'react';
import * as styling from './Styling/Styling.js';

const Search = ({ searchText, setSearchText }) => {
  return (
    <styling.SearchBarContainer>
      <styling.SearchInput type="text" placeholder="Search Reviews" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
      {searchText.length > 0 && <styling.ClearSearchButton type="button" onClick={() => setSearchText('')}>X</styling.ClearSearchButton>}
    </styling.SearchBarContainer>
  );
};

export default Search;
