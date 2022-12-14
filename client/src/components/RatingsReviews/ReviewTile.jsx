/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styling from './Styling/Styling.js';
import StaticStars from './StaticStars.jsx';
import { getReviewsData } from './Utils.js';

const ReviewTile = ({ currentID, review, setReviews, sortOrder, helpfulReviews, setHelpfulReviews, searchText }) => {

  const [reviewLength, setReviewLength] = useState(250);
  const [displayPhoto, setDisplayPhoto] = useState({
    viewing: false,
    url: ''
  });
  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  const formatDate = (date) => {
    return new Date(review.date).toDateString().slice(4);
  };

  const handleHelpfulReview = (review_id) => {
    const newHelpfulReviews = [...helpfulReviews];
    newHelpfulReviews.push(review_id);
    localStorage.setItem('helpful', JSON.stringify(newHelpfulReviews));
    setHelpfulReviews(newHelpfulReviews);
  };

  const handleUpdate = (route, review_id) => {
    axios({
      url: `/reviews/${route}`,
      method: 'put',
      params: {
        review_id
      }
    })
      .then(() => {
        return getReviewsData('/reviews', currentID, sortOrder, 1000);
      })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => console.log(error));
    if (route === 'helpful') {
      handleHelpfulReview(review_id);
    }
  };

  const handlePhotoClick = (url) => {
    setPhotoModalVisible(true);
    let newViewing;
    displayPhoto.viewing ? newViewing = false : newViewing = true;
    setDisplayPhoto({ ...displayPhoto, viewing: newViewing, url });
  };

  const highlightText = (text) => {
    if (searchText < 3) {
      return text;
    }
    const parts = text.split(new RegExp(`(${searchText})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          <span key={index} style={part.toLowerCase() === searchText.toLowerCase() ? { backgroundColor: '#ffec00'} : {} }>
            {part}
          </span>)}
      </span>
    );
  };

  const toggleLongReview = (body) => {
    if (body.length < 250) {
      return highlightText(body.slice(0, 250));
    }
    return (
      <styling.ReviewBody>{highlightText(body.slice(0, reviewLength))}
        {reviewLength === 250 && <styling.ShowMoreButton onClick={() => setReviewLength(1000)}>Show More...</styling.ShowMoreButton>}
      </styling.ReviewBody>
    );
  };

  return (
    <styling.ReviewTileDiv>
      <styling.ReviewTileContent>
        <styling.ReviewTileHeader>
          <styling.ReviewTileSummary>{highlightText(review.summary)}</styling.ReviewTileSummary>
          <span>{formatDate(review.date)}</span>
        </styling.ReviewTileHeader>
        <span>
          <StaticStars rating={review.rating} size={12} />
        </span>
        <styling.ReviewBody>{toggleLongReview(review.body)}</styling.ReviewBody>
        <styling.ReviewPhotos>
          {review.photos.map((photo, index) => {
            return <img key={photo.id} src={photo.url} alt="Clothing product" width="100" height="100" onClick={() => handlePhotoClick(photo.url)} />;
          })}
        </styling.ReviewPhotos>
        {displayPhoto.viewing && (
        <styling.ModalBackground
          onClick={() => setPhotoModalVisible(false)}
          out={!photoModalVisible}
          onAnimationEnd={() => !photoModalVisible && setDisplayPhoto({ ...displayPhoto, viewing: false })}
        >
          <styling.ModalImage onClick={(event) => event.stopPropagation() }src={displayPhoto.url} alt="Clothing product" />
        </styling.ModalBackground>
        )}
        {review.recommend && <styling.ReviewLabels>&#10004; User Recommended</styling.ReviewLabels>}
        <styling.UsernameContainer>
          <styling.UserIcon>
            {review.reviewer_name.slice(0, 1)}
          </styling.UserIcon>
          <styling.Username>{review.reviewer_name}</styling.Username>
        </styling.UsernameContainer>
        {review.response && <styling.SellerResponse>{`Seller: ${review.response}`}</styling.SellerResponse>}
        {<styling.HelpfulLabel>{`${review.helpfulness} people found this helpful`}</styling.HelpfulLabel>}
        <styling.TileButtons>
          {helpfulReviews.includes(review.review_id) ? <styling.HelpfulButton>Helpful &#10004;</styling.HelpfulButton> : <styling.HelpfulButton type="submit" onClick={() => handleUpdate('helpful', review.review_id)}>Helpful?</styling.HelpfulButton>}
          <styling.ReportButton type="submit" onClick={() => handleUpdate('report', review.review_id)}>Report</styling.ReportButton>
        </styling.TileButtons>
      </styling.ReviewTileContent>
    </styling.ReviewTileDiv>
  );
};

export default ReviewTile;
