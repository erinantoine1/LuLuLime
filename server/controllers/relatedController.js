const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getCurrentItem: (req, res) => {
    axios.get(`${config.URL}/products/${req.query.product_id}`, { headers: { Authorization: config.TOKEN } })
      .then(item => res.status(200).send(item.data))
      .catch(err => res.status(404).send());
  },

  getCurrentStyles: (req, res) => {
    axios.get(`${config.URL}/products/${req.query.product_id}/styles`, { headers: { Authorization: config.TOKEN } })
      .then(item => res.status(200).send(item.data))
      .catch(err => res.status(404).send());
  }
};
