const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

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

const getContactById = async contactId => {
  try {
    const contacts = await getContacts();
    const contact = contacts.find(({ id }) => id.toString() === contactId);
    if (!contact) {
      console.error(`There is no contact with id ${contactId}.`);
      return;
    }
    return contact;
  } catch (err) {
    console.error(err.message);
  }
};

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await getContacts();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      console.log(`Contact with name ${name} already exists.`);
      return;
    }

    if (contacts.find(contact => contact.email === email)) {
      console.log(`Contact with email ${email} already exists.`);
      return;
    }

    if (contacts.find(contact => contact.phone === phone)) {
      console.log(`Contact with phone ${phone} already exists.`);
      return;
    }
    const newContact = { id: uuidv4(), name, email, phone };
    const newContacts = [...contacts, newContact];
    await fs.writeFile(
      contactsPath,
      JSON.stringify(newContacts, null, 2),
      'utf8',
    );
    console.log('New contact was added.');

    return newContact;
  } catch (err) {
    console.error(err.message);
  }
};

const removeContact = async contactId => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
