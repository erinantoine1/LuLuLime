import React, { useState } from 'react';
import List from './List.jsx';

const RelatedItemsComparisons = () => {
  return (
    <div>
      <h1>Related Items</h1>
      <List />
      <h1>Your Outfit</h1>
      <List />
    </div>
  );
};

export default RelatedItemsComparisons;

