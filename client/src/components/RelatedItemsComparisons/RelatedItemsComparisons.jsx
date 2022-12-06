import React, { useState } from 'react';
import styled from 'styled-components';
import RelatedList from './RelatedList.jsx';
import RelatedList2 from './version2/RelatedList2.jsx';
import OutfitList from './OutfitList.jsx';
import CompareModal from './CompareModal.jsx';

const Slate = styled.div`
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  text-align: center;
`;

const RelatedItemsComparisons = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Slate>
      {showModal && <CompareModal showModal={showModal} setShowModal={setShowModal} />}
      <h1>Related Items</h1>
      <RelatedList setShowModal={setShowModal} showModal={showModal} />
      <h1>Your Outfit</h1>
      <OutfitList />
    </Slate>
  );
};

export default RelatedItemsComparisons;
