const contactsOperations = require("./contacts");
const argv = require("yargs").argv;
console.log(argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      return await contactsOperations.listContacts();

    case "get":
      return await contactsOperations.getContactById(id);

    case "add":
      return await contactsOperations.addContact(name, email, phone);

    case "remove":
      return await contactsOperations.removeContact(id.toString());

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
