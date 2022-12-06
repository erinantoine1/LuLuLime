/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
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
  const [relatedItem, setRelatedItem] = useState([{}, {}, {}, {}, {}]);
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
        <RelatedCard picture="https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" setShowModal={setShowModal} showModal={showModal} />
        <RelatedCard picture="https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
        <RelatedCard picture="https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
        <RelatedCard picture="https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
        <RelatedCard picture="https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" type="related" />
      </CardContainer>
      <RightButton type="button" onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default RelatedList;
