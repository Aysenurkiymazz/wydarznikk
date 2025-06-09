const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/', async (req, res) => {
  const events = await Event.find().sort({ date: 1 }).limit(3);
  res.render('index', { events });
});

module.exports = router;
