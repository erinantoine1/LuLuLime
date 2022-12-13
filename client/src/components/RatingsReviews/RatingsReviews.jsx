import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as styling from './Styling/Styling.js';
import GlobalStyle from './Styling/globalStyles.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import Filters from './Filters.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import StaticStars from './StaticStars.jsx';
import ReviewList from './ReviewList.jsx';
import { getReviewsData } from './Utils.js';

const RatingsReviews = ({ currentID }) => {

  const [reviews, setReviews] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [metaData, setMetaData] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [searchText, setSearchText] = useState('');

  // Data loaded
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [metaDataLoaded, setMetaDataLoaded] = useState(false);

  // Modal Control
  const [displayReviewForm, setDisplayReviewForm] = useState(false);

  const handleSort = (value) => {
    getReviewsData('/reviews', currentID, value, 1000)
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => console.log(error));
    setSortOrder(value);
  };

  const getTotalRatings = (ratings) => {
    let totalVoters = 0;
    Object.values(ratings).forEach((rating) => {
      totalVoters += Number(rating);
    });
    return totalVoters;
  };

  const filterReviews = () => {
    if (filterBy.length === 0 && searchText.length >= 3) {
      return reviews.filter((review) => {
        return review.body.includes(searchText);
      });
    }
    if (filterBy.length > 0) {
      if (searchText.length >= 3) {
        return reviews.filter((review) => {
          return filterBy.includes(review.rating) && review.body.includes(searchText);
        });
      }
      return reviews.filter((review) => {
        return filterBy.includes(review.rating);
      });
    }
    return reviews;
  };

  useEffect(() => {
    getReviewsData('/reviews', currentID, 'relevant', 1000)
      .then((response) => {
        setReviews(response.data.results);
        setReviewsLoaded(true);
      })
      .catch((error) => console.log(error));
    getReviewsData('/reviews/meta', currentID)
      .then((response) => {
        setMetaData(response.data);
        setTotalRatings(getTotalRatings(response.data.ratings));
        setMetaDataLoaded(true);
      })
      .catch((error) => console.log(error));
    if (!localStorage.getItem('helpful')) {
      localStorage.setItem('helpful', JSON.stringify([]));
    }
  }, [currentID]);

  if (!reviewsLoaded || !metaDataLoaded) {
    return <div>Loading Reviews</div>;
  }
  return (
    <styling.ReviewSectionContainer>
      <GlobalStyle />
      <styling.ReviewSectionHeader>
        <h1>Reviews</h1>
        <RatingBreakdown
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          metaData={metaData}
          totalRatings={totalRatings}
        />
        <styling.DropDownDiv>
          <label htmlFor="sort">
            <b>Sort-By:</b>
            <styling.Select onChange={(event) => handleSort(event.target.value)} name="sort" id="sort">
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </styling.Select>
          </label>
        </styling.DropDownDiv>
      </styling.ReviewSectionHeader>
      <styling.ReviewSectionBody>
        <styling.SidebarDiv>
          <Filters
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            metaData={metaData}
            totalRatings={totalRatings}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <styling.ProductBreakdownContainer>
            {Object.entries(metaData.characteristics).map((characteristic) => (
              <ProductBreakdown
                key={characteristic[1].id}
                characteristic={characteristic}
              />
            ))}
          </styling.ProductBreakdownContainer>
        </styling.SidebarDiv>
        <ReviewList
          currentID={currentID}
          reviews={filterReviews()}
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

