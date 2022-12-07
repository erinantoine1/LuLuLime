/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  margin: 10px;
  height: 375px;
  position: relative;
`;

const StyledCard2 = styled.div`
  box-shadow: 0 1px 1rem -4px #000;
  background: #fff;
  margin-left: 14px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  height: 70%;
  width: 300px;
`;

const Info = styled.div`
  margin: 0;
  padding: 0;
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

const StyledStar = styled.img`
  height: 25px;
  width: 25px;
  top: 0.3rem;
  left: 90%;
  position: absolute;
`;

const RelatedCard = ({ picture, type, setShowModal, showModal, outfitItems, setOutfitItems }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [picture, setPicture] = useState('');

  return (
    <StyledCard>
      <StyledStar onClick={() => setShowModal(!showModal)} alt="star" src="https://starpng.com/public/uploads/preview/star-black-and-white-star-icon-png-image-transparent-101576581363xuvnqfy4r1.png" />
      <Image src={picture} alt="item" />
      <StyledCategory>Category</StyledCategory>
      <StyledName>Name</StyledName>
      <StyledName>Price</StyledName>
    </StyledCard>
  );
};


export default RelatedCard;
