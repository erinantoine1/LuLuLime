/* eslint-disable max-len */
import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Add from './Add.jsx';
import OutfitCard from './OutfitCard.jsx';

const ContainerParent = styled.div`
  margin-left: 12%;
  margin-right: 12%;
  display: flex;
  border: 2px solid blue;
`;

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  text-align: center;
  scroll-behavior: smooth;
  flex: 1;
  object-fit: cover;
  position: relative;
  border: 1px solid black;
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
  const [outfitItems, setOutfitItems] = useState([]);
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(false);

  useLayoutEffect(() => {
    setWidth(containerRef.current.offsetWidth);
  }, []);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth / 3 + 0.5;
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth / 3 + 0.5;
  };

  return (
    <ContainerParent>
      <LeftButton onClick={handleLeftClick}>⇠</LeftButton>
      <Add cardWidth={containerRef.current.offsetWidth} setOutfitItems={setOutfitItems} outfitItems={outfitItems} />
      <CardContainer ref={containerRef}>
        {outfitItems.map((item, index) => <OutfitCard outfitItems={outfitItems} setOutfitItems={setOutfitItems} picture="https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" cardWidth={containerRef.current.offsetWidth} />)}
      </CardContainer>
      <RightButton onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};


export default OutfitList;
