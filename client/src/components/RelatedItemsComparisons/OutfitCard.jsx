import React, { useState } from 'react';
import styled from 'styled-components';
import StaticStars from '../RatingsReviews/StaticStars.jsx';

const Ratings = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #fafafa;
  overflow: hidden;
  width: fit-content;
  min-width: fit-content;
`;

const EmptyStars = styled.div`
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px #848484;
  }
`;

const FullStars = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: black;
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px black;
  }
  width: ${props => props.percentage}%;
`;

const StyledCard = styled.div`
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  -webkit-box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  -moz-box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  height: 60%;
  width: ${props => props.width}px;
`;

const StyledName = styled.h3`
  margin: 0.5rem 0;
  padding: 0;
`;

const StyledPrice = styled.p`
  padding: 0;
  margin: 0;
`;

const StyledCategory = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  color: #A9A9A9;
`;

const StyledX = styled.img`
  height: 25px;
  width: 25px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;

const OutfitCard = ({ outfitItems, setOutfitItems, cardWidth, name, category, default_price, pictures, ratings, setCurrentID, id }) => {

  const handleClick = () => {
    setCurrentID(id);
    window.scrollTo({ top: 0 });
  };

  const removeItem = () => {
    const copy = JSON.parse(localStorage.getItem('yourOutfit'));
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].pictures === pictures && copy[i].name === name) {
        copy.splice(i, 1);
      }
    }
    localStorage.setItem('yourOutfit', JSON.stringify(copy));
    setOutfitItems(copy);
  };

  return (
    <StyledCard>
      <StyledX src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="X" onClick={removeItem} />
      <Image width={cardWidth} alt="image" src={pictures} onClick={handleClick} />
      <StyledCategory>{category}</StyledCategory>
      <StyledName>{name}</StyledName>
      <StyledPrice>{default_price}</StyledPrice>
      <StaticStars rating={ratings} size={12} />
    </StyledCard>
  );
};


export default OutfitCard;
