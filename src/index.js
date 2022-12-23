const yargs = require("yargs");

const argv = require("yargs").argv;

let name = yargs.argv.name;
let phone = yargs.argv.phone;
let email = yargs.argv.email;
let id = yargs.argv.id;

function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			listContacts();
			break;

		case "get":
			// ... id
			break;

		case "add":
			// ... name email phone
			break;

		case "remove":
			// ... id
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction(argv);
