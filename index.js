const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const listContacts = await contactsOperations.listContacts();
      console.log(listContacts);
      break;
    case "getContactById":
      const getContactById = await contactsOperations.getContactById(id);
      console.log(getContactById);
      break;
    case "removeContact":
      const removeContact = await contactsOperations.removeContact(Id);
      console.log(removeContact);
      break;
    case "addContact":
      const addContact = await contactsOperations.addContact(
        name,
        email,
        phone,
      );
      console.log(addContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const contact = {
  name: "Dimasik",
  email: "dimon.stasyuk@gmail.com",
  phone: "068-351-05-13",
};

Id = "1";
invokeAction({ action: "addContact", ...contact });
// invokeAction({ action: "removeContact", Id });
// const id = 6;
// invokeAction({ action: "getContactById", id: id });
// invokeAction({ action: "listContacts" });
