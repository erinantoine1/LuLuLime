import React, { useRef } from 'react';
import styled from 'styled-components';
import Card from '../Card.jsx';

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15%;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background #fff;
  height: 46px;
  width 46px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:first-child {
    left: -23px;
  }
  &:last-child {
    right: -23px;
  }
`;

const Carousel = styled.div`
  white-space: nowrap;
  cursor: pointer;
  scroll-behavior: smooth;
  overflow: hidden;
`;

// overflow: hidden;
// white-space: nowrap;
// overflow-y: scroll;

const Image = styled.img`
  height: 340px;
  object-fit: cover;
  margin-left: 12px;
  width: calc(100% / 4);
  &:first-child {
    margin-left: 0px;
  }

  @media screen and (max-width: 900px) {
    width: calc(100% / 2);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const RelatedList2 = () => {
  const firstImage = useRef(null);
  const carousel = useRef(null);


  const handleRightClick = () => {
    const imageWidth = carousel.current.offsetWidth / 4 + 12;
    carousel.current.scrollLeft += imageWidth;
  };

  const handleLeftClick = () => {
    const imageWidth = carousel.current.offsetWidth / 4 + 12;
    carousel.current.scrollLeft -= imageWidth;
  };

  // const handleRightClick = () => {
  //   console.log(containerRef.current.offsetWidth);
  //   containerRef.current.scrollLeft += containerRef.current.offsetWidth / 2;
  // };
  // <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
  return (
    <Body>
      <Wrapper>
        <Button onClick={handleLeftClick}>Left</Button>
        <Carousel ref={carousel}>
          <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
          <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
          <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
          <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
          <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
          <Image src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
        </Carousel>
        <Button onClick={handleRightClick}>Right</Button>
      </Wrapper>
    </Body>
  );
};

export default RelatedList2;
