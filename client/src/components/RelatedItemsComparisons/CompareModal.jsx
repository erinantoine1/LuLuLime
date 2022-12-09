import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.5);
`;

const InnerModal = styled.div`
  background-color: white;
  margin: 8% 30%;
  height: 60vh;

  @media screen and (max-width: 1100px) {
    margin: 8% 25%;
  }

  @media screen and (max-width: 800px) {
    margin 8% 15%;
  }
`;

const StyledColumn = styled.div`
  float: left;
  width: 33%;
`;

const SpaceHolder = styled.h2`
  visibility: hidden;
`;

const StyledTitle = styled.div`
  padding-top: 1rem;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;


const CompareModal = ({ setShowModal }) => {
  // add states for comparisons

  return (
    <Modal onClick={() => setShowModal(false)}>
      <InnerModal>
        <StyledTitle>
          <h1>Comparing</h1>
        </StyledTitle>
        <StyledColumn>
          <h2>Item1</h2>
          <StyledText>✔</StyledText>
          <StyledText>✘</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✘</StyledText>
        </StyledColumn>
        <StyledColumn>
          <SpaceHolder>nothing</SpaceHolder>
          <StyledText>Something1</StyledText>
          <StyledText>Something2</StyledText>
          <StyledText>Something3</StyledText>
          <StyledText>Something4</StyledText>
          <StyledText>Something5</StyledText>
        </StyledColumn>
        <StyledColumn>
          <h2>Item2</h2>
          <StyledText>✘</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✘</StyledText>
          <StyledText>✔</StyledText>
        </StyledColumn>
      </InnerModal>
    </Modal>
  );
};

export default CompareModal;
