import React, { useState } from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

const Container = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.25);
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
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
