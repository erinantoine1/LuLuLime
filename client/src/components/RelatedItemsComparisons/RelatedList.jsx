import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const CardContainer = styled.div`
  display: flex;
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  text-align: center;
  scroll-behavior: smooth;
  flex: 1;
  border: 3px solid black;
`;

const ContainerParent = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex
`;

const StyledButton = styled.button`
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  border: 2px solid black;
`;

const RelatedList = () => {
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth / 2;
  };

  const handleRightClick = () => {
    console.log(containerRef.current.offsetWidth);
    containerRef.current.scrollLeft += containerRef.current.offsetWidth / 2;
  };

  return (
    <ContainerParent>
      <StyledButton type="button" onClick={handleLeftClick}>LEFT</StyledButton>
      <CardContainer ref={containerRef}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <StyledButton type="button" onClick={handleRightClick}>RIGHT</StyledButton>
    </ContainerParent>
  );
};

export default RelatedList;
