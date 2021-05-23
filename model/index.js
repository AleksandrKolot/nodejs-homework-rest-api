const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, '.', 'contacts.json');

const getContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error(err.message);
  }
};

const listContacts = async () => {
  try {
    const allContacts = await getContacts();
    return allContacts;
  } catch (err) {
    console.error(err.message);
  }
};

const getContactById = async contactId => {};

const removeContact = async contactId => {};

const addContact = async body => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
