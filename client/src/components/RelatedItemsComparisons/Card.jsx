/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ActionButtonStar from './ActionButtonStar.jsx';
import ActionButtonX from './ActionButtonX.jsx';
import { TOKEN } from '../../../../config.js';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  margin: 10px;
  height: 375px;
  position: relative;
`;

// &:first-child {
//   margin-left: 0px;
// }

const StyledCard2 = styled.div`
  box-shadow: 0 1px 1rem -4px #000;
  background: #fff;
  margin-left: 14px;
  overflow: hidden;
  cursor: pointer;
`;

// &:first-child {
//   margin-left: 0px;
// }
// object-fit: cover;

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

const Card = ({ picture, type, setShowModal, showModal }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [picture, setPicture] = useState('');

  const styledcard = useRef(null);

  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40346/styles', { headers: { Authorization: TOKEN } })
  //     .then((res) => {
  //       console.log(res.data);
  //       setName(res.data.results[0].name);
  //       setPrice(res.data.results[0].original_price);
  //       setPicture(res.data.results[0].photos[0].thumbnail_url);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <StyledCard>
      {type === 'related' ? <ActionButtonStar setShowModal={setShowModal} showModal={showModal} /> : <ActionButtonX />}
      <Image alt="image" src={picture} />
      <StyledCategory>Category</StyledCategory>
      <StyledName>Name</StyledName>
      <StyledName>Price</StyledName>
    </StyledCard>
  );
};

export default Card;
