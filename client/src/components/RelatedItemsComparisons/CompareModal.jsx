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

  const [features, setFeatures] = useState([]);
  const [currentFeatures, setCurrentFeatures] = useState({});
  const [relatedFeatures, setRelatedFeatures] = useState({});

  useEffect(() => {
    const uniqueFeatures = [];
    const currentTemp = {};
    const relatedTemp = {};
    for (let i = 0; i < currentItem['features'].length; i++) {
      if (currentItem['features'][i]['value'] !== null) {
        uniqueFeatures.push(currentItem['features'][i]['value']);
        currentTemp[currentItem['features'][i]['value']] = true;
      }
    }

    for (let i = 0; i < relatedItem['features'].length; i++) {
      if (!uniqueFeatures.includes(relatedItem['features'][i]['value']) && relatedItem['features'][i]['value'] !== null) {
        uniqueFeatures.push(relatedItem['features'][i]['value'])
        relatedTemp[relatedItem['features'][i]['value']] = true;
      } else if (uniqueFeatures.includes(relatedItem['features'][i]['value']) && relatedItem['features'][i]['value'] !== null) {
        relatedTemp[relatedItem['features'][i]['value']] = true;
      }
    }

    setCurrentFeatures(currentTemp);
    setRelatedFeatures(relatedTemp);
    setFeatures(uniqueFeatures);
  }, []);

  return (
    <Modal onClick={() => setShowModal(false)}>
      {(Object.keys(currentItem).length && Object.keys(relatedItem).length) ? <InnerModal onClick={(e) => e.stopPropagation()}>
      <StyledTitle>Comparing</StyledTitle>
        <StyledColumn1>{currentItem.name}</StyledColumn1><SpaceHolder>Feature</SpaceHolder><StyledColumn1>{relatedItem.name}</StyledColumn1>
        {features?.map((item, index) => {
          if(currentFeatures[item] && relatedFeatures[item]) {
            return <div key={index}><StyledColumn>✔</StyledColumn><StyledColumn>{item}</StyledColumn><StyledColumn>✔</StyledColumn></div>
          }
          if(currentFeatures[item] && !relatedFeatures[item]) {
            return <div key={index}><StyledColumn>✔</StyledColumn><StyledColumn>{item}</StyledColumn><StyledColumn>-</StyledColumn></div>
          }
          if(!currentFeatures[item] && relatedFeatures[item]) {
            return <div key={index}><StyledColumn>-</StyledColumn><StyledColumn>{item}</StyledColumn><StyledColumn>✔</StyledColumn></div>
          }
        })}
      </InnerModal> : null}
    </Modal>
  );
};

export default CompareModal;
