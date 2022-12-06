import React from 'react';
import styled from 'styled-components';

const StyledX = styled.img`
  height: 25px;
  width: 25px;
  top: 0.3rem;
  left: 90%;
  position: absolute;
`;

const ActionButtonX = () => {

  return (
    <StyledX src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="X" />
  );
};

export default ActionButtonX;
