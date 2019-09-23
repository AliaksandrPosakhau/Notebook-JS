const yargs = require('yargs');
const Notebook = require('./Notebook.js');



/*
   TASK ONE. NOTEBOOK

 1) The application should store all notes in a json file.

 2) The application should have the following functions implemented:
  write(noteTitle: string, noteBody: string), read(noteTitle: string), list(), delete(noteTitle: string).

    При этом:
    - read должна найти по тайтлу записку и вывести в консоль ее текст;
    - функция list() выводить должна просто список тайтлов;

 3) A note object should have the following properties “title” and “body”.

 4) To get arguments from the command line use “yargs” module

*/

let argv = yargs
    .command("add","adding new note", {
        title:{
            describe:"title of the note",
            alias:"t"
        },
        body:{
            describe:"body of the note",
            alias:"b"
        }
    })
    .command("write","also adding new note", {
        title:{
            describe:"title of the note",
            alias:"t"
        },
        body:{
            describe:"body of the note",
            alias:"b"
        }
    })
    .command("delete","deleting note from notebook by its title", {
        title:{
            describe:"title of the note",
            alias:"t"
        }
    })
    .command(
        "read","printing note in console by its title", {
            title:{
                describe:"title of the note",
                alias:"t"
            }
        })
    .command(
        "list","printing all titles of all notes"
    )
    .argv;


let operation = yargs.argv._.toString();

let myNotebook = new Notebook();

switch (operation) {
    case "add":
        myNotebook.createNewNote(yargs.argv.title,yargs.argv.body);
        break;

    case "write":
        myNotebook.createNewNote(yargs.argv.title,yargs.argv.body);
      break;            
     case "read":
         Notebook.prototype.readNote('navigate');
         break;
        case "list":
            myNotebook.printTitlesOfAllNotes();
      break;
             case "delete":
      myNotebook.deleteNote(yargs.argv.title);
      break;
             default:
      console.log('Unknown operation - cannot perform any actions...');


}


 