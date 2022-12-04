const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getAllReviews: (req, res) => {
    axios.get(`${config.URL}/reviews/`)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};
