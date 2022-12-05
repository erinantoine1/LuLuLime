import React, { useState } from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import RelatedList2 from './version2/RelatedList2.jsx';
import OutfitList from './OutfitList.jsx';

const Slate = styled.div`
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  text-align: center;
`;

const RelatedItemsComparisons = () => {

  return (
    <Slate>
      <h1>Related Items</h1>
      <RelatedList />
      <h1>My Outfit</h1>
      <OutfitList />
    </Slate>
  );
};

export default RelatedItemsComparisons;
