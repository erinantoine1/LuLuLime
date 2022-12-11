import React, { useState } from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import CompareModal from './CompareModal.jsx';

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  text-align: center;
`;

const RelatedItemsComparisons = ({ currentID, setCurrentID }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {showModal && <CompareModal setShowModal={setShowModal} />}
      <h1>Related Items</h1>
      <RelatedList setCurrentID={setCurrentID} setShowModal={setShowModal} showModal={showModal} currentID={currentID} />
      <h1>Your Outfit</h1>
      <OutfitList currentID={currentID} />
    </Container>
  );
};

export default RelatedItemsComparisons;
