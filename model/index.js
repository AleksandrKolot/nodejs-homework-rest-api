const Contact = require('./schemas/contact');

const listContacts = async () => {
  try {
    const result = await Contact.find({});

    return result;
  } catch (err) {
    console.error(err.message);
  }
};

const getContactById = async contactId => {
  try {
    const result = await Contact.findOne({ _id: contactId });

    if (!result) {
      console.error(`There is no contact with id ${contactId}.`);
      return;
    }
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

const addContact = async body => {
  try {
    const result = await Contact.create(body);
    console.log('New contact was added.');
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

const removeContact = async contactId => {
  try {
    const result = await Contact.findByIdAndRemove({
      _id: contactId,
    });

    if (!result) {
      console.error(`There is no contact with id ${contactId}.`);
      return;
    }

    console.log(`Contact with id ${contactId} was deleted.`);

    return result;
  } catch (err) {
    console.error(err.message);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const result = await Contact.findByIdAndUpdate(
      { _id: contactId },
      { ...body },
      { new: true },
    );

    if (!result) {
      console.error(`There is no contact with id ${contactId}.`);
      return;
    }

    console.log(`Contact with id ${contactId} was updated.`);

    return result;
  } catch (err) {
    console.error(err.message);
  }
};

const updateStatusContact = async (contactId, body) => {
  try {
    const result = await Contact.findByIdAndUpdate(
      { _id: contactId },
      { ...body },
      { favorite: true },
    );

    if (!result) {
      console.error(`There is no contact with id ${contactId}.`);
      return;
    }

    console.log(`Contact with id ${contactId} was updated.`);

    return result;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
