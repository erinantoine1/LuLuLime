import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const fadeInAnimation = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;

const Modal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.5);
  animation-name: ${fadeInAnimation};
  animation-duration: 0.3s;
`;

const InnerModal = styled.div`
  background-color: white;
  margin: 6% 20%;
  height: 65vh;
  text-align: center;
  border-radius: 1rem;

  @media screen and (max-width: 1100px) {
    margin: 8% 15%;
  }

  @media screen and (max-width: 800px) {
    margin 8% 10%;
  }
`;

const StyledColumn1 = styled.div`
  float: left;
  width: 33%;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const StyledColumn = styled.div`
  float: left;
  width: 33%;
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SpaceHolder = styled.div`
  float: left;
  width: 33%;
  visibility: hidden;
`;

const StyledTitle = styled.h1`
  padding-top: 4rem;
`;

const StyledText = styled.p`
  display: inline;
  margin: 5%;
`;

const CompareModal = ({ currentItem, relatedItem, setShowModal }) => {

  return (
    <Modal onClick={() => setShowModal(false)}>
      {(Object.keys(currentItem).length && Object.keys(relatedItem).length) ? <InnerModal onClick={(e) => e.stopPropagation()}>
      <StyledTitle>Comparing</StyledTitle>
        <StyledColumn1>{currentItem.name}</StyledColumn1><SpaceHolder>Feature</SpaceHolder><StyledColumn1>{relatedItem.name}</StyledColumn1>
        {currentItem['features']?.map((item, index) => {
          if(item['value'] !== null) {
            return <div key={index}><StyledColumn>✔</StyledColumn><StyledColumn>{item['value']}</StyledColumn><StyledColumn>-</StyledColumn></div>
          }
        })}
        {relatedItem['features']?.map((item, index) => {
          if(item['value'] !== null) {
            return <div key={index}><StyledColumn>-</StyledColumn><StyledColumn>{item['value']}</StyledColumn><StyledColumn>✔</StyledColumn></div>
          }
        })}
      </InnerModal> : null}
    </Modal>
  );
};

export default CompareModal;
