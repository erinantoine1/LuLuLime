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

const RelatedList = ({ setShowModal, showModal, setCurrentID, currentID }) => {
  const [relatedItems, setRelatedItems] = useState([]);
  // {id, name, category, default_price, sale_price, picture}
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
    setScrollCount(0);
    containerRef.current.scrollLeft = 0;

    const temp = [];

    axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => Promise.all(res.data.map(itemID => axios.get('/currentItem', { params: { product_id: itemID } }))))
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          const item = { id: res[i].data.id, name: res[i].data.name, category: res[i].data.category, default_price: res[i].data.default_price };
          temp.push(item);
        }
      })
      .then(() => axios.get('/currentItem/related', { params: { product_id: currentID } }))
      .then(res => Promise.all(res.data.map(itemID => axios.get('/currentItem/styles', { params: { product_id: itemID } }))))
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < res[i].data.results.length; j++) {
            if (res[i].data.results[j]['default?']) {
              temp[i].photo = res[i].data.results[j].photos[0].url;
              // get sale price
            }
          }
          if (typeof temp[i].photo !== 'string') {
            temp[i].photo = 'https://greenvilleidc.com/img/placeholder.jpeg';
          }
        }
        console.log('new object : ', temp);
        setRelatedItems(temp);
      })
      .catch(err => console.error(err));
  }, [currentID]);

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
        {(width && relatedItems.length !== 0) && relatedItems.map((item, index) => <RelatedCard id={item.id} name={item.name} default_price={item.default_price} category={item.category} cardWidth={Math.ceil(width / 4)} picture={item.photo} setShowModal={setShowModal} key={`${item}+${index}`} setCurrentID={setCurrentID} />)}
      </CardContainer>
      <RightButton scrollCount={scrollCount} len={relatedItems.length} onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default RelatedList;
