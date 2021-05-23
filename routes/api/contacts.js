const express = require('express');
const router = express.Router();
const contacts = require('../../model/index');

router.get('/', async (req, res, next) => {
  try {
    const allContacts = await contacts.listContacts();
    return res.json ({status: 'success', code: 200, data: {allContacts}})
  } catch (err) {
    next(err);
  }
});

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
