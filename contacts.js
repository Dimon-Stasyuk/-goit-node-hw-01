const fs = require("fs/promises");
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const getAll = await fs.readFile(contactsPath);
  const result = JSON.parse(getAll);
  return result;
}

async function getContactById(id) {
  const getAll = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getAll);
  const result = contacts.find((contact) => contact.id === id.toString());
  return result;
}

async function removeContact(contactId) {
  const getAll = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getAll);
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }

  const updateContacts = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));

  return contacts[idx];
}

async function addContact(name, email, phone) {
  const newContact = { id: shortid.generate(), name, email, phone };
  const getAll = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getAll);
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
