const express = require('express');
const router = express.Router();

const contactsController = require('../../controllers/contacts');
const validate = require('./validation');

router
  .get('/', contactsController.get)
  .post('/', validate.addContact, contactsController.create);

router
  .get('/:contactId', contactsController.getById)
  .delete('/:contactId', contactsController.remove)
  .patch('/:contactId', validate.updateContact, contactsController.update);

router.patch(
  '/:contactId/favorite',
  validate.updateStatusContact,
  contactsController.updateStatus,
);

module.exports = router;
