import React from 'react';
import styled from 'styled-components';

const StyledListCard = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  padding: 5px;
  display: inline-block;
  width: 250px;
  height: 250px;
  margin: 5% 2.5%;
`;

const ListCard = ({ name, description, price }) => {

  return (
    <StyledListCard>
      <img alt="nice pants" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </StyledListCard>
  );
};

// RelatedListCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };

export default ListCard;
