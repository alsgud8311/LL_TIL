const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.post('/new', async (req, res) => {
  const { author, detail, passwd } = req.body;
  res.type('Content-Type', 'application/json');
  res.status(200).json({ message: 'ok' });
});

module.exports = router;
