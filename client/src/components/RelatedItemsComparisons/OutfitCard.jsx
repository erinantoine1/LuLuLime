/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  margin: 10px;
  height: 375px;
  position: relative;
`;

const Image = styled.img`
  height: 70%;
  width: 300px;
`;

const StyledName = styled.h3`
  margin: 0;
  padding: 0;
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
  top: 0.3rem;
  left: 90%;
  position: absolute;
`;

const OutfitCard = ({ outfitItems, setOutfitItems, picture }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [picture, setPicture] = useState('');

  const removeItem = () => {
    const copy = [...outfitItems];
    copy.pop();
    setOutfitItems(copy);
  };

  return (
    <StyledCard>
      <StyledX src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="X" onClick={removeItem} />
      <Image alt="image" src={picture} />
      <StyledCategory>Category</StyledCategory>
      <StyledName>Name</StyledName>
      <StyledName>Price</StyledName>
    </StyledCard>
  );
};


export default OutfitCard;
