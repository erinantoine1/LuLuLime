import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import CompareModal from './CompareModal.jsx';
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
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  margin-bottom: 1rem;
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

const StyledStar = styled.img`
  height: 25px;
  width: 25px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;

const Image = styled.img`
    height: 60%;
    width: ${props => props.width}px;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const RelatedCard = ({ id, currentID, setCurrentID, name, category, default_price, picture, type, outfitItems, setOutfitItems, cardWidth, ratings }) => {
  const [showModal, setShowModal] = useState(false);

  const [currentItem, setCurrentItem] = useState({});
  const [relatedItem, setRelatedItem] = useState({});

  // useEffect(() => {
  //   axios.get('/currentItem', { params: { product_id: currentID } })
  //     .then(res => {
  //       setCurrentItem(res.data);
  //     })
  //     .catch(err => console.error(err));

  //   axios.get('/currentItem', { params: { product_id: id } })
  //     .then(res => {
  //       setRelatedItem(res.data);
  //     })
  //     .catch(err => console.error(err));
  // }, [currentID, id]);

  return (
    <Container>
      {/* {showModal && <CompareModal currentItem={currentItem} relatedItem={relatedItem} setShowModal={setShowModal} /> } */}
      <StyledCard>
        <StyledStar onClick={() => setShowModal(true)} alt="star" src="https://starpng.com/public/uploads/preview/star-black-and-white-star-icon-png-image-transparent-101576581363xuvnqfy4r1.png" />
        <Image width={cardWidth} src={picture} alt="item" onClick={() => setCurrentID(id)} />
        <StyledCategory>{category}</StyledCategory>
        <StyledName>{name}</StyledName>
        <StyledPrice>{default_price}</StyledPrice>
        <StaticStars rating={ratings} size={12} />
      </StyledCard>
    </Container>
  );
};


export default RelatedCard;
