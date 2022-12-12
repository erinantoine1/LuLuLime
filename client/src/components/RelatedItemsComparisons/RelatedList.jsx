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

const RelatedList = ({ setCurrentID, currentID }) => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [styles, setStyles] = useState([]);
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
    setScrollCount(0);
    containerRef.current.scrollLeft = 0;

    axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => Promise.all(res.data.map(itemID => axios.get('/currentItem', { params: { product_id: itemID } }))))
      .then(res => {
        const temp = [];

        for (let i = 0; i < res.length; i++) {
          temp.push(res[i].data);
        }
        setRelatedItems(temp);
      })
      .catch(err => console.error(err));

    axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => Promise.all(res.data.map(itemID => axios.get('/currentItem/styles', { params: { product_id: itemID } }))))
      .then(res => {
        const temp = [];

        for (let i = 0; i < res.length; i++) {
          let hasDefault = false;
          for (let j = 0; j < res[i].data.results.length; j++) {
            if (res[i].data.results[j]['default?']) {
              hasDefault = true;
              if (typeof res[i].data.results[j].photos[0].url === 'string') {
                temp.push({ photo: res[i].data.results[j].photos[0].url });
              } else {
                temp.push({ photo: 'https://media.allure.com/photos/5adba084276cd40c0eb8f42e/16:9/w_2560%2Cc_limit/GettyImages-826492462.jpg' });
              }
            }
          }

          if (!hasDefault) {
            if(typeof res[i].data.results[0].photos[0].url === 'string') {
              temp.push({ photo: res[i].data.results[0].photos[0].url });
            } else {
              temp.push({ photo: 'https://media.allure.com/photos/5adba084276cd40c0eb8f42e/16:9/w_2560%2Cc_limit/GettyImages-826492462.jpg' });
            }
          }
        }

        setStyles(temp);
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
        {(width && relatedItems.length !== 0 && styles.length !== 0) && relatedItems.map((item, index) => <RelatedCard id={item.id} name={item.name} default_price={item.default_price} category={item.category} cardWidth={Math.ceil(width / 4)} picture={styles[index]?.photo} key={`${item}+${index}`} currentID={currentID} setCurrentID={setCurrentID} />)}
      </CardContainer>
      <RightButton scrollCount={scrollCount} len={relatedItems.length} onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default RelatedList;
