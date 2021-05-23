const express = require('express');
const router = express.Router();
const contacts = require('../../model/index');

router.get('/', async (req, res, next) => {
  try {
    const allContacts = await contacts.listContacts();
    return res.json({ status: 'success', code: 200, data: { allContacts } });
  } catch (err) {
    next(err);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await contacts.getContactById(req.params.contactId);

    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        message: 'Contact was found',
        data: { contact },
      });
    } else {
      return res
        .status(404)
        .json({ status: 'error', code: 404, message: 'Not found' });
    }
  } catch (error) {
    next(error);
  }
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
