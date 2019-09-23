const yargs = require('yargs');
const Notebook = require('./Notebook.js');

let argv = yargs
    .command("write", "also adding new note", {
        title: {
            describe: "title of the note",
            alias: "t"
        },
        body: {
            describe: "body of the note",
            alias: "b"
        }
    })
    .command("delete", "deleting note from notebook by its title", {
        title: {
            describe: "title of the note",
            alias: "t"
        }
    })
    .command("read", "printing note in console by its title", {
            title: {
                describe: "title of the note",
                alias: "t"
            }
        })
    .command("list", "printing all titles of all notes")
    .argv;

let operation = yargs.argv._.toString();
let myNotebook = new Notebook();

switch (operation) {
    case "write":
        myNotebook.createNewNote(yargs.argv.title, yargs.argv.body);
        break;
    case "read":
        myNotebook.readNote(yargs.argv.title);
        break;
    case "list":
        myNotebook.printTitlesOfAllNotes();
        break;
    case "delete":
        myNotebook.deleteNote(yargs.argv.title);
        break;
    default:
        console.log('Unknown operation - cannot perform any actions...');
};


 