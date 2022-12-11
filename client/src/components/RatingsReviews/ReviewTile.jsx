/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styling from './Styling/Styling.js';
import StaticStars from './StaticStars.jsx';

const ReviewTile = ({ review, setReviews, sortOrder, helpfulReviews, setHelpfulReviews }) => {

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
        return axios.get('/reviews', {
          params: {
            product_id: 40344,
            sort: sortOrder,
            count: 1000
          }
        });
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

  const toggleLongReview = (body) => {
    return (
      <styling.ReviewBody>{body.slice(0, reviewLength)}
        {reviewLength === 250 && <button onClick={() => setReviewLength(1000)}>Show More</button>}
      </styling.ReviewBody>
    );
  };

  return (
    <styling.ReviewTileDiv>
      <styling.ReviewTileContent>
        <styling.ReviewTileHeader>
          <h3>{review.summary}</h3>
          <span>{formatDate(review.date)}</span>
        </styling.ReviewTileHeader>
        <span>
          <StaticStars rating={review.rating} size={12} />
        </span>
        {review.body.length <= 250 ? <styling.ReviewBody>{review.body}</styling.ReviewBody> : toggleLongReview(review.body)}
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
        {review.recommend ? <span>&#9989; I recommend this product</span> : null}
        <span>{`Posted By: ${review.reviewer_name}`}</span>
        {review.response && <div>`Response From Seller: ${review.response}`</div>}
        {`${review.helpfulness} people found this helpful`}
        <styling.TileButtons>
          {helpfulReviews.includes(review.review_id) ? <styling.Buttons>Helpful &#9989;</styling.Buttons> : <styling.Buttons type="submit" onClick={() => handleUpdate('helpful', review.review_id)}>Helpful</styling.Buttons>}
          <styling.ReportButton type="submit" onClick={() => handleUpdate('report', review.review_id)}>Report</styling.ReportButton>
        </styling.TileButtons>
      </styling.ReviewTileContent>
    </styling.ReviewTileDiv>
  );
};

export default ReviewTile;
