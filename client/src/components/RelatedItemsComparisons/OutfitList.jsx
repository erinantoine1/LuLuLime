import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Add from './Add.jsx';
import OutfitCard from './OutfitCard.jsx';

const ContainerParent = styled.div`
  margin-left: 12%;
  margin-right: 12%;
  display: flex;
`;

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

const OutfitList = ({ currentID }) => {
  const [outfitItems, setOutfitItems] = useState([]);
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    if (typeof localStorage.getItem('yourOutfit') !== 'string') {
      localStorage.setItem('yourOutfit', '[]');
    }
    setWidth(containerRef.current.offsetWidth);
    setOutfitItems(JSON.parse(localStorage.getItem('yourOutfit')));
  }, []);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= Math.ceil(width / 4);
    setScrollCount(scrollCount - 1);
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += Math.ceil(width / 4);
    setScrollCount(scrollCount + 1);
  };

  return (
    <ContainerParent>
      <LeftButton onClick={handleLeftClick}>⇠</LeftButton>
      <Add cardWidth={width} setOutfitItems={setOutfitItems} outfitItems={outfitItems} currentID={currentID} />
      <CardContainer ref={containerRef}>
        {outfitItems.map((item, index) => <OutfitCard outfitItems={outfitItems} setOutfitItems={setOutfitItems} cardWidth={Math.ceil(width / 4)} key={index} name={item.name} default_price={item.default_price} category={item.category} pictures={item.pictures} />)}
      </CardContainer>
      <RightButton onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default OutfitList;
