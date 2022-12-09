import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import GlobalStyle from './globalStyles.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import Filters from './Filters.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import StaticStars from './StaticStars.jsx';
import ReviewList from './ReviewList.jsx';


const RatingsReviews = () => {

  const [reviews, setReviews] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [metaData, setMetaData] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);

  // Data loaded
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [metaDataLoaded, setMetaDataLoaded] = useState(false);

  // Modal Control
  const [displayReviewForm, setDisplayReviewForm] = useState(false);

  const generateReviews = (product_id, sort, count) => {
    const queries = { product_id, sort, count };
    axios.get('/reviews', {
      params: queries
    })
      .then((response) => {
        setReviews(response.data.results);
        setReviewsLoaded(true);
      })
      .catch((error) => console.log(error));
  };

  const handleSort = (value) => {
    generateReviews(40344, value, 1000);
    setSortOrder(value);
  };

  const getTotalRatings = (ratings) => {
    let totalVoters = 0;
    Object.values(ratings).forEach((rating) => {
      totalVoters += Number(rating);
    });
    return totalVoters;
  };

  useEffect(() => {
    generateReviews(40344, 'relevant', 1000);
  }, []);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: 40344
      }
    })
      .then((response) => {
        setMetaData(response.data);
        setTotalRatings(getTotalRatings(response.data.ratings));
        setMetaDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!reviewsLoaded || !metaDataLoaded) {
    return <div>Loading Reviews</div>;
  }
  return (
    <styling.ReviewSectionContainer>
      <GlobalStyle />
      <styling.ReviewSectionHeader>
        <h1>Reviews</h1>
        <RatingBreakdown filterBy={filterBy} setFilterBy={setFilterBy} metaData={metaData} totalRatings={totalRatings} />
        <label htmlFor="sort">
          <b>Sort By:</b>
          <select onChange={(event) => handleSort(event.target.value)} name="sort" id="sort">
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </styling.ReviewSectionHeader>
      <styling.ReviewSectionBody>
        <styling.SidebarDiv>
          <Filters filterBy={filterBy} setFilterBy={setFilterBy} metaData={metaData} totalRatings={totalRatings} />
          {Object.entries(metaData.characteristics).map((characteristic) => (
            <ProductBreakdown
              key={characteristic[1].id}
              characteristic={characteristic}
            />
          ))}
        </styling.SidebarDiv>
        <ReviewList
          reviews={filterBy.length === 0 ? reviews : reviews.filter((review) => {
            return filterBy.includes(review.rating);
          })}
          metaData={metaData}
          setReviews={setReviews}
          sortOrder={sortOrder}
          displayReviewForm={displayReviewForm}
          setDisplayReviewForm={setDisplayReviewForm}
        />
      </styling.ReviewSectionBody>
    </styling.ReviewSectionContainer>
  );
};

export default RatingsReviews;

