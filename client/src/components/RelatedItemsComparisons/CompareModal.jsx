/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Model = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

const InnerModel = styled.div`
  background-color: white;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  min-height: 600px;
`;

const CompareModal = ({ showModal, setShowModal }) => {

  return (
    <Model onClick={() => setShowModal(!showModal)}>
      <InnerModel>
        <h1>IM THE MODAL</h1>
      </InnerModel>
    </Model>
  );
};

export default CompareModal;
