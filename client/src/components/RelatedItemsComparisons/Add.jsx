import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  margin: 10px;
  height: 375px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Plus = styled.h1`
  font-size: 5rem;
`;

const Add = () => {

  return (
    <StyledCard>
      <Plus>+</Plus>
    </StyledCard>
  );
};


export default Add;
