import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Add from './Add.jsx';
import Card from './Card.jsx';

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

const LeftButton = styled.button`
  float: left;
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  border: none;
  cursor: pointer;
  font-size: 3rem;
`;

const RightButton = styled.button`
  float: right;
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  border: none;
  cursor: pointer;
  font-size: 3rem;
`;


const OutfitList = () => {
  const [outfitItems, setOutfitItems] = useState([1, 2, 3, 1, 1]);
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth * 0.7;
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth * 0.7;
  };

  return (
    <ContainerParent>
      <LeftButton onClick={handleLeftClick}>{'<'}</LeftButton>
      <Add />
      <CardContainer ref={containerRef}>
        {outfitItems.map((item, index) => <Card picture="https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />)}
      </CardContainer>
      <RightButton onClick={handleRightClick}>{'>'}</RightButton>
    </ContainerParent>
  );
};


export default OutfitList;
