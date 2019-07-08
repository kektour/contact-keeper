'use strict';

const express = require('express');
const router = express.Router();

// @route     GET /api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', async (req, res) => {
  res.send('Get logged in user');
});

// @route     POST /api/auth
// @desc      Auth user & token
// @access    Public
router.post('/', async (req, res) => {
  res.send('Auth user & token');
});

module.exports = router;
