
const path = require('path');
const yargs = require('yargs');
const fs = require ('fs')
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

//running application
console.log('Notebook application started...');
console.log(yargs.argv);

//acquiring current operation from the command line
let operation = yargs.argv._.toString();

 // let myNotebook = new Notebook();





//operations logic
switch (operation) {            
    case "write":
        myNotebook.createNewNote(yargs.argv.title,yargs.argv.body);
      break;            
     case "read":
      // myNotebook.readNote(yargs.argv.title);
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
  

 