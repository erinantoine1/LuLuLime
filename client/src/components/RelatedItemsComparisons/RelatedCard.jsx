import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  margin-bottom: 1rem;
`;
// &:first-child {
//   margin-left: 2px;
// }

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

const StyledStar = styled.img`
  height: 25px;
  width: 25px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;

const Image = styled.img`
    height: 60%;
    width: ${props => props.width}px;
`;

const RelatedCard = ({ picture, type, setShowModal, outfitItems, setOutfitItems, cardWidth, setNewProduct }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [picture, setPicture] = useState('');

  return (
    <StyledCard onClick={() => setNewProduct(40345)}>
      <StyledStar onClick={() => setShowModal(true)} alt="star" src="https://starpng.com/public/uploads/preview/star-black-and-white-star-icon-png-image-transparent-101576581363xuvnqfy4r1.png" />
      <Image width={cardWidth} src={picture} alt="item" />
      <StyledCategory>Category</StyledCategory>
      <StyledName>Name</StyledName>
      <StyledPrice>Price</StyledPrice>
      <StyledName>☆☆☆☆☆</StyledName>
    </StyledCard>
  );
};


export default RelatedCard;
