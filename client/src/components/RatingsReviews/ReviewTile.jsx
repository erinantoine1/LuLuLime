/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import StaticStars from './StaticStars.jsx';

const ReviewTile = ({ review, setReviews, sortOrder }) => {

  const formatDate = (date) => {
    return new Date(review.date).toDateString().slice(4);
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
        <div>{review.body}</div>
        <styling.ReviewPhotos>
          {review.photos.map((photo) => {
            return <img key={photo.id} src={photo.url} alt="Clothing product" width="100" height="100" />;
          })}
        </styling.ReviewPhotos>
        {review.recommend ? <span>&#9989; I recommend this product</span> : null}
        <span>{`Posted By: ${review.reviewer_name}`}</span>
        <div>{review.response}</div>
        {`${review.helpfulness} people found this helpful`}
        <styling.TileButtons>
          <styling.Buttons type="submit" onClick={() => handleUpdate('helpful', review.review_id)}>Helpful</styling.Buttons>
          <styling.ReportButton type="submit" onClick={() => handleUpdate('report', review.review_id)}>Report</styling.ReportButton>
        </styling.TileButtons>
      </styling.ReviewTileContent>
    </styling.ReviewTileDiv>
  );
};

export default ReviewTile;
