'use strict';

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route     GET /api/contacts
// @desc      Get all user contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    return res.json(contacts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server error');
  }
});

// @route     POST /api/contacts
// @desc      Add new contact
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server error');
    }
  }
);

// @route     PUT /api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', async (req, res) => {
  res.send('Update contact');
});

// @route     DELETE /api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    return res.send('Delete contact');
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
