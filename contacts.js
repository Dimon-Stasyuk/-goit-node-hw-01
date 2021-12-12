const fs = require("fs/promises");
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const getAll = await fs.readFile(contactsPath);
  const result = JSON.parse(getAll);
  console.table(result);
  return result;
}

async function getContactById(id) {
  const getAll = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getAll);
  const result = contacts.find((contact) => contact.id === id.toString());
  console.table(result);
  return result;
}

async function removeContact(id) {
  const getAll = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getAll);
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }

  const updateContacts = contacts.filter((contact) => contact.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));
  console.table(updateContacts);

  return contacts[idx];
}

async function addContact(name, email, phone) {
  const newContact = { id: shortid.generate(), name, email, phone };
  const getAll = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getAll);
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.table(contacts);

  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
