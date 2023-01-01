const fs = require("fs").promises;
const { error } = require("console");
const path = require("path");
const contactsPath = path.join("./db/contacts.json");

async function writeContacts() {
	const contacts = await fs.readFile(contactsPath);
	return JSON.parse(contacts);
}

async function listContacts() {
	try {
		const contacts = await writeContacts();
		return contacts;
	} catch (error) {
		console.log(error.message);
	}
}

async function getContactById(contactId) {
	try {
		const contacts = await listContacts();
		const requestedContact = contacts.find(({ id }) => id === contactId);
		return requestedContact;
	} catch (error) {
		console.log(error.message);
	}
}

async function removeContact(contactId) {
	try {
		const contacts = await listContacts();
		const filteredContacts = contacts.filter(({ id }) => id !== contactId);
		await fs.writeFile(
			contactsPath,
			JSON.stringify(filteredContacts, null, 2),
			{
				encoding: "utf-8",
			}
		);
		return filteredContacts;
	} catch (error) {
		console.log(error.message);
	}
}

async function addContact(name, email, phone) {
	try {
		let contacts = await listContacts();
		const lastId = Math.max(...contacts.map((c) => parseInt(c.id, 10))) + 1;
		const newContact = { id: lastId.toString(), name, email, phone };
		const updateContacts = [...contacts, newContact];
		await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2), {
			encoding: "utf-8",
		});
		return updateContacts;
	} catch {
		console.log(error.message);
	}
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
