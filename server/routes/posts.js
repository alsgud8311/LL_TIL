const express = require('express');
const dotenv = require('dotenv');
const { transaction } = require('../repository/connect.js');
const post = require('../controller/post.js');
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { track } = req.body;
  let data = await transaction(post.getPosts, [track]);
  console.log(data);
  const sendingData = JSON.stringify({
    data: data[0],
  });
  res.type('Content-Type', 'application/json');
  res.json(sendingData);
});

router.post('/new', async (req, res) => {
  const { author, detail, passwd, track } = req.body;
  await transaction(post.addPost, [author, passwd, detail, track]);
  res.type('Content-Type', 'application/json');
  res.status(200).json({ message: 'ok' });
});

module.exports = router;
