import React from 'react';
import styled from 'styled-components';

const Star = styled.img`
  height: 25px;
  width: 25px;
  top: 0;
  left: 90%;
  position: absolute;
`;

const ActionButtonStar = () => {


  return (
    <Star onClick={() => console.log('clicked')} src="https://cdn-icons-png.flaticon.com/512/753/753263.png" alt="star" />
  );
};



export default ActionButtonStar;
