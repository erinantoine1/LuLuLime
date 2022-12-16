import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedCard from './RelatedCard.jsx';

const ContainerParent = styled.div`
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
  background-color: #EAFAF1;
  height: 75px;
  width: 75px;
  margin: auto 6px;
  cursor: pointer;
  font-size: 3rem;
  border: none;
  visibility: ${props => props.scrollCount > 0 ? 'visible' : 'hidden'};
`;

const RightButton = styled.button`
  float: right;
  text-align: center;
  background-color: #EAFAF1;
  height: 75px;
  width: 75px;
  margin: auto 6px;
  cursor: pointer;
  font-size: 3rem;
  border: none;
  visibility: ${props => props.scrollCount >= props.len - 4 ? 'hidden' : 'visible'};
`;

const getAverageRating = (ratings) => {
  let totalRating = 0;
  let totalRatings = 0;
  Object.entries(ratings).forEach((pair) => {
    totalRating += (Number(pair[0]) * Number(pair[1]));
    totalRatings += (Number(pair[1]))
  });
  return Math.round((totalRating / totalRatings) * 10) / 10;
};

const RelatedList = ({ setCurrentID, currentID }) => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [styles, setStyles] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
    setScrollCount(0);
    containerRef.current.scrollLeft = 0;

    axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => {
        if(typeof localStorage.getItem(`${JSON.stringify(res.data)}info`) === 'string') {
          setRelatedItems(JSON.parse(localStorage.getItem(`${JSON.stringify(res.data)}info`)));
        } else {
          console.log('promise all fired');
          Promise.all(res.data.map(itemID => axios.get('/currentItem', { params: { product_id: itemID } })))
          .then(item => {
            const temp = [];
            for (let i = 0; i < item.length; i++) {
              temp.push(item[i].data);
            }
            localStorage.setItem(`${JSON.stringify(res.data)}info`, JSON.stringify(temp));
            setRelatedItems(temp);
          })
          .catch(err => console.log(err));
        }
      })
      .catch(err => console.error(err));

    axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => {
        if(typeof localStorage.getItem(`${JSON.stringify(res.data)}styles`) === 'string') {
          setStyles(JSON.parse(localStorage.getItem(`${JSON.stringify(res.data)}styles`)));
        } else {
          console.log('promise all 2 fired');
          Promise.all(res.data.map(itemID => axios.get('/currentItem/styles', { params: { product_id: itemID } })))
          .then(item => {
            const temp = [];
            for (let i = 0; i < item.length; i++) {
            let hasDefault = false;
            for (let j = 0; j < item[i].data.results.length; j++) {
              if (item[i].data.results[j]['default?']) {
                hasDefault = true;
                if (typeof item[i].data.results[j].photos[0].url === 'string') {
                  temp.push({ photo: item[i].data.results[j].photos[0].url });
                } else {
                  temp.push({ photo: 'https://media.allure.com/photos/5adba084276cd40c0eb8f42e/16:9/w_2560%2Cc_limit/GettyImages-826492462.jpg' });
                }
              }
            }
            if (!hasDefault) {
              if(typeof item[i].data.results[0].photos[0].url === 'string') {
                temp.push({ photo: item[i].data.results[0].photos[0].url });
              } else {
                temp.push({ photo: 'https://media.allure.com/photos/5adba084276cd40c0eb8f42e/16:9/w_2560%2Cc_limit/GettyImages-826492462.jpg' });
              }
            }
          }
          localStorage.setItem(`${JSON.stringify(res.data)}styles`, JSON.stringify(temp));
          setStyles(temp);
          })
          .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));

      axios.get('/currentItem/related', { params: { product_id: currentID } })
      .then(res => {
        if(typeof localStorage.getItem(`${JSON.stringify(res.data)}stars`) === 'string') {
          setRatings(JSON.parse(localStorage.getItem(`${JSON.stringify(res.data)}stars`)));
        } else {
          console.log('promise all 3 fired');
          Promise.all(res.data.map(itemID => axios.get('/reviews/meta', { params: { product_id: itemID } })))
          .then(item => {
            const temp = [];
            for (let i = 0; i < item.length; i++) {
              temp.push(getAverageRating(item[i].data.ratings))
            }
            localStorage.setItem(`${JSON.stringify(res.data)}stars`, JSON.stringify(temp));
            setRatings(temp);
          })
          .catch(err => console.error(err));
        }
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
        {(width && relatedItems.length && styles.length && ratings.length) ? relatedItems.map((item, index) => <RelatedCard id={item.id} name={item.name} default_price={item.default_price} category={item.category} cardWidth={Math.ceil(width / 4)} picture={styles[index]?.photo} ratings={ratings[index]} key={`${item}+${index}`} currentID={currentID} setCurrentID={setCurrentID} />) : null}
      </CardContainer>
      <RightButton scrollCount={scrollCount} len={relatedItems.length} onClick={handleRightClick}>⇢</RightButton>
    </ContainerParent>
  );
};

export default RelatedList;
