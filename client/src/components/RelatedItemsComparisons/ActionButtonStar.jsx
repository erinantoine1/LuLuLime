/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledStar = styled.img`
  height: 25px;
  width: 25px;
  top: 0;
  left: 90%;
  position: absolute;
`;

const ActionButtonStar = ({ setShowModal, showModal }) => {

  return (
    <StyledStar onClick={() => setShowModal(!showModal)} src="https://cdn-icons-png.flaticon.com/512/753/753263.png" alt="star" />
  );
};



export default ActionButtonStar;
