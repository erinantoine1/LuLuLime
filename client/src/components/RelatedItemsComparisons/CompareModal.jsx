import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  margin: 6% 20%;
  height: 65vh;
  text-align: center;

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
  font-size: 1.5rem;
  margin: 1rem 10%;
  display: inline;
  visibility: hidden;
`;

const StyledTitle = styled.h1`
  padding-top: 1rem;
`;

const StyledText = styled.p`
  display: inline;
  margin: 5%;
`;


const CompareModal = ({ setShowModal, currentItem, relatedItem }) => {
  // return 30% divs in the map

  return (
    <Modal onClick={() => setShowModal(false)}>
      <InnerModal onClick={(e) => e.stopPropagation()}>
      <StyledTitle>Comparing</StyledTitle>
        <StyledText>{currentItem.name}</StyledText><StyledText>Feature</StyledText><StyledText>{relatedItem.name}</StyledText>
        {currentItem['features']?.map(item => <div><StyledText>✔</StyledText><StyledText>{item['value']}</StyledText><StyledText>✘</StyledText></div>)}
        {relatedItem['features']?.map(item => <div><StyledText>✘</StyledText><StyledText>{item['value']}</StyledText><StyledText>✔</StyledText></div>)}
      </InnerModal>
    </Modal>
  );
};

export default CompareModal;

// <StyledTitle>Comparing</StyledTitle>
//         <StyledText>Hello</StyledText><StyledText>Hello</StyledText><StyledText>Hello</StyledText>

//         <StyledText>✘</StyledText>
//           <StyledText>✔</StyledText>
//           <StyledText>✔</StyledText>
//           <StyledText>✘</StyledText>
//           <StyledText>✔</StyledText>