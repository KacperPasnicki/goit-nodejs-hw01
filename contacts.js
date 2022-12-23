const fs = require("fs").promises;
const { writeFile } = require("fs");
const path = require("node:path");

const contactsPath = path.join("./db/contacts.json");

const writeContacts = fs
/*/
writeFile !!!!!
/*/
	.readFile(contactsPath)
	.then((data) => console.log(data.toString()))
	.catch((e) => console.log(e.message));

function listContacts() {
	
	try {
		const contacts = JSON.parse(fs.readFile(contactsPath));
        return contacts
	} catch (e) {
		return []
	}
}

function getContactById(contactId) {
	// ...twój kod
}

async function removeContact(contactId) {
	try {
        contacts = JSON.parse(fs.readFile(contactsPath))
      await filter.contacts((contactId) => contactId.id != id)
    }
    catch{e}
    console.log(e)
}

async function addContact(name, email, phone) {
	let contacts = JSON.stringify(contacts);
	try {
	} catch {}
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
