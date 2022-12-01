require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = require('./router.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('There is no server at ', process.env.PORT);
  } else {
    console.log('Listening on Port ', process.env.PORT);
  }
});