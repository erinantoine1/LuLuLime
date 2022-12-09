import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  margin: 0;
`;

const Image = styled.img`
  height: 60%;
  width: ${props => props.width}px;
`;

const StyledName = styled.h3`
  margin: 0.5rem 0;
  padding: 0;
`;

const StyledPrice = styled.p`
  padding: 0;
  margin: 0;
`;

const StyledCategory = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  color: #A9A9A9;
`;

const StyledX = styled.img`
  height: 25px;
  width: 25px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;

const OutfitCard = ({ outfitItems, setOutfitItems, cardWidth, name, category, default_price, pictures }) => {

  const removeItem = () => {
    const copy = JSON.parse(localStorage.getItem('yourOutfit'));
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].pictures === pictures && copy[i].name === name) {
        copy.splice(i, 1);
      }
    }
    localStorage.setItem('yourOutfit', JSON.stringify(copy));
    setOutfitItems(copy);
  };

  return (
    <StyledCard>
      <StyledX src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="X" onClick={removeItem} />
      <Image width={cardWidth} alt="image" src={pictures} />
      <StyledCategory>{category}</StyledCategory>
      <StyledName>{name}</StyledName>
      <StyledPrice>{default_price}</StyledPrice>
      <StyledName>☆☆☆☆☆</StyledName>
    </StyledCard>
  );
};


export default OutfitCard;
