import React, { useState } from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  text-align: center;
`;

const RelatedItemsComparisons = ({ currentID, setCurrentID }) => {

  return (
    <Container>
      <h1>Related Items</h1>
      <RelatedList setCurrentID={setCurrentID} currentID={currentID} />
      <h1>Your Outfit</h1>
      <OutfitList currentID={currentID} setCurrentID={setCurrentID} />
    </Container>
  );
};

export default RelatedItemsComparisons;
