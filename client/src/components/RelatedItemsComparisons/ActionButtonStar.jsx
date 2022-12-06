/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledStar = styled.img`
  height: 25px;
  width: 25px;
  top: 0.3rem;
  left: 90%;
  position: absolute;
`;

const ActionButtonStar = ({ setShowModal, showModal }) => {

  return (
    <StyledStar onClick={() => setShowModal(!showModal)} src="https://starpng.com/public/uploads/preview/star-black-and-white-star-icon-png-image-transparent-101576581363xuvnqfy4r1.png" alt="star" />
  );
};



export default ActionButtonStar;
