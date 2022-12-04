const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getReviews: (req, res) => {
    const { query: { product_id } } = req;
    const { query: { sort } } = req;
    axios({
      url: `${config.URL}/reviews/?product_id=${product_id}&sort=${sort}`,
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
};
