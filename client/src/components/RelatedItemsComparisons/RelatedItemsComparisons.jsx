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

const Title = styled.h1`
  font-size: 2rem;
`;

const RelatedItemsComparisons = ({ currentID, setCurrentID }) => {

  return (
    <Container>
      <Title>Related Items</Title>
      <RelatedList setCurrentID={setCurrentID} currentID={currentID} />
      <Title>Your Outfit</Title>
      <OutfitList currentID={currentID} setCurrentID={setCurrentID} />
    </Container>
  );
};

export default RelatedItemsComparisons;
