/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  width: ${props => props.width / 4}px;
`;

// box-shadow: 0 1px 0.5rem -4px #000;
//   background: #fff;
//   cursor: pointer;
//   height: 375px;
//   position: relative;
//   margin-bottom: 1rem;
const Plus = styled.h1`
  font-size: 4rem;
`;

const Add = ({ outfitItems, setOutfitItems, cardWidth }) => {

  const addItem = () => {
    const copy = [...outfitItems];
    copy.push(1);
    setOutfitItems(copy);
  };

  return (
    <StyledCard width={cardWidth} onClick={addItem}>
      <Plus>+</Plus>
    </StyledCard>
  );
};

export default Add;
