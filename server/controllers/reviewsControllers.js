const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getReviews: (req, res) => {
    const { query: { product_id } } = req;
    const { query: { sort } } = req;
    const { query: { count } } = req;
    axios({
      url: `${config.URL}/reviews/?product_id=${product_id}&sort=${sort}&count=${count}`,
      method: 'get',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getMetaData: (req, res) => {
    const { query: { product_id } } = req;
    axios({
      url: `${config.URL}/reviews/meta/?product_id=${product_id}`,
      method: 'get',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  postReview: (req, res) => {
    axios({
      url: `${config.URL}/reviews`,
      method: 'post',
      data: req.body,
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(201).send();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
