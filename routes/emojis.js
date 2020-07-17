var express = require('express');
var router = express.Router();
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

/* GET emojis listing. */
router.get('/', function (req, res, next) {
  fetch(`${process.env.EMOJI_API_END_POINT}?access_key=${process.env.EMOJI_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      res.json(data)
      console.log(`Number of items: ${data.length}`);
      console.log(process.env.EMOJI_API_END_POINT);
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
