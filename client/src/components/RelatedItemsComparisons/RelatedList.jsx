/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import RelatedCard from './RelatedCard.jsx';

const ContainerParent = styled.div`
  margin-left: 12%;
  margin-right: 12%;
  display: flex;
`;
// align-items: center
// justify-content: center;

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  text-align: center;
  scroll-behavior: smooth;
  flex: 1;
  object-fit: cover;
  position: relative;
`;

const Button = styled.button`
  background #fff;
  height: 46px;
  width 46px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:first-child {
    left: -23px;
  }
  &:last-child {
    right: -23px;
  }
`;

const LeftButton = styled.button`
  float: left;
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  cursor: pointer;
  font-size: 3rem;
  border: none;
`;

const RightButton = styled.button`
  float: right;
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  cursor: pointer;
  font-size: 3rem;
  border: none;
`;


const RelatedList = ({ setShowModal, showModal }) => {
  const [relatedItem, setRelatedItem] = useState([{}, {}, {}, {}, {}, {}, {}]);
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth * 0.7;
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth * 0.7;
  };

  return (
    <ContainerParent>
      <LeftButton type="button" onClick={handleLeftClick}>⇠</LeftButton>
      <CardContainer ref={containerRef}>

        {relatedItem.map((item, index) => <RelatedCard picture="https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" setShowModal={setShowModal} showModal={showModal} />)}
      </CardContainer>
      <RightButton type="button" onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default RelatedList;
