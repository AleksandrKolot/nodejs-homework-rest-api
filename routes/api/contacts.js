const express = require('express');
const router = express.Router();

const contactsController = require('../../controllers/contacts');
const validate = require('./validation');

router
  .get('/:contactId', contactsController.getById)
  .delete('/:contactId', contactsController.remove)
  .patch('/:contactId', validate.updateContact, contactsController.update);
  .patch('/:contactId/favorite', validate.updateContact, contactsController.updateStatus)

module.exprots = router;
