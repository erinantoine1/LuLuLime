import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled.div`
  box-shadow: 0 1px 1rem -4px #000;
  background: #fff;
  margin: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

const Card = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', { headers: { Authorization: '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' } })
      .then((res) => {
        setName(res.data.results[0].name);
        setPrice(res.data.results[0].original_price);
        setPicture(res.data.results[0].photos[0].thumbnail_url);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <StyledCard>
        <img alt="" src={picture} />
        <h2>{name}</h2>
        <h3>{price}</h3>
      </StyledCard>
    </div>
  );
};

// RelatedListCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };

export default Card;
