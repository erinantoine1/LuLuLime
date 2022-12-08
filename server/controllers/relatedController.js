const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getItem: (req, res) => {
    // axios.get(`${config.URL}/products`)
    console.log('controller fired');
  }
};
