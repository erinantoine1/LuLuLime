const axios = require('axios');
const config = require('../../config');

module.exports = {
  getAllProducts: (req, res) => {
    const getAllProds = (callback) => {
      const options = {
        url: `${config.URL}/products`,
        method: 'GET',
        headers: {
          Authorization: `${config.TOKEN}`,
        },
      };
      axios(options).then((response) => {
        callback(response.data);
      });
    };

    return getAllProds((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  getAllProductStyles: (req, res) => {
    const getAllProdStyles = (callback) => {
      const options = {
        url: `${config.URL}/products/${req.query.currentID}/styles`,
        method: 'GET',
        headers: {
          Authorization: `${config.TOKEN}`,
        },
      };
      axios(options).then((response) => {
        callback(response.data);
      });
    };
    return getAllProdStyles((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  getCartItems: (req, res) => {
    const getCart = (callback) => {
      const options = {
        url: `${config.URL}/cart`,
        method: 'GET',
        headers: {
          Authorization: `${config.TOKEN}`,
        },
      };
      axios(options).then((response) => {
        callback(response.data);
      });
    };
    return getCart((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  addCartItem: (req, res) => {
    const addToCart = (reqBody, callback) => {
      const options = {
        url: `${config.URL}/cart`,
        method: 'POST',
        data: reqBody,
        headers: {
          Authorization: `${config.TOKEN}`,
        },
      };
      axios(options).then((response) => {
        callback(response.data);
      });
    };
    return addToCart(req.body, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).send(results);
      }
    });
  },
  // getAllReviews: (req, res) => {
  //   // console.log(req);
  //   return getAllRevs(40344, (err, results) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       // console.log(results);
  //       res.status(200).send((results));
  //     }
  //   });
  // },
};
