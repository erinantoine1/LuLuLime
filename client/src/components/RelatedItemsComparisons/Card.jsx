/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ActionButtonStar from './ActionButtonStar.jsx';
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


const Card = (props) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState('');

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
      <ActionButtonStar />
      <Image alt="image" src={props.picture} />
      <h2>name</h2>
      <h3>price</h3>
    </StyledCard>
  );
};

// RelatedListCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };

export default Card;
