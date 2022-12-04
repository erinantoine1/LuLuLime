import React, { useState } from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';

const StyledRIC = styled.div`
  text-align: center;
  font-family: Helvetica;
`;

const RelatedItemsComparisons = () => {
  return (
    <StyledRIC>
      <h1>Related Items</h1>
      <RelatedList />
      <h1>Your Outfit</h1>
    </StyledRIC>
  );
};

export default RelatedItemsComparisons;

