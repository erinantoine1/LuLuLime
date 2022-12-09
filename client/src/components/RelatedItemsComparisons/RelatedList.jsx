import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
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
  visibility: ${props => props.scrollCount > 0 ? 'visible' : 'hidden'};
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
  visibility: ${props => props.scrollCount === props.len - 4 ? 'hidden' : 'visible'};
`;

const RelatedList = ({ setShowModal, showModal, setNewProduct, currentID }) => {
  const [relatedItem, setRelatedItem] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
    // axios.get('/related')
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
    axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => {
        console.log('related items: ', res.data);
        return Promise.all([]);
      })
      .catch(err => console.error(err));

    // Promise.all([axios.get('/related'), axios.get('/related')])
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
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
      <LeftButton scrollCount={scrollCount} onClick={handleLeftClick}>⇠</LeftButton>
      <CardContainer ref={containerRef}>
        {width && relatedItem.map((item, index) => <RelatedCard cardWidth={Math.ceil(width / 4)} picture="https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" setShowModal={setShowModal} key={`${item}+${index}`} setNewProduct={setNewProduct} />)}
      </CardContainer>
      <RightButton scrollCount={scrollCount} len={relatedItem.length} onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default RelatedList;
