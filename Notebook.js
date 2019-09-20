const fs = require ('fs');
const notesFolderPath = './notes/';

class Notebook{

    // constructor() {
    //     console.log('Constructor created the instance of notebook...')
    // }

    //prints list of titles of all notes
    printTitlesOfAllNotes(){
        console.log('                            ');
        console.log('List of all current titles: ');
        console.log('----------------------------');

        let counter=1;

        fs.readdir(notesFolderPath, (err, files) => {
            files.forEach(file => {
                let contents = fs.readFileSync('./notes/'+file);
                let jsonContent = JSON.parse(contents);
                console.log(counter+'. '+jsonContent.title);
                counter++;
            });
        });

    }

    //creating new JSON file (note) according to operation - write and storing it into /notes/ folder
    //taking note title as filename
    createNewNote(localTitle,localBody){
        let newNoteObject = {
            title: localTitle,
            body: localBody
        };
        let json = JSON.stringify(newNoteObject);
        fs.writeFileSync('./notes/' + localTitle + '.json', json, 'utf8');
    }


    // read operation must find a node which corresponds with title been inserted and
    // print its text into console
    readNote(localTitle) {
        fs.readdir(notesFolderPath, (err, files) => {
            files.forEach(file => {
                let contents = fs.readFileSync('./notes/'+file);
                let jsonContent = JSON.parse(contents);

                if(localTitle===jsonContent.title) {
                    console.log('                            ');
                    console.log('Reading note with title: '+localTitle);
                    console.log('----------------------------');
                    console.log(jsonContent.title);
                    console.log(jsonContent.body);

                }

            });
        });

    }

    // delete(noteTitle: string)
    deleteNote(localTitle){
        fs.readdir(notesFolderPath, (err, files) => {
            files.forEach(file => {
                let contents = fs.readFileSync('./notes/'+file);
                let jsonContent = JSON.parse(contents);
                if(localTitle===jsonContent.title) {
                    console.log('                            ');
                    console.log('Deleting note with title: '+localTitle);
                    fs.unlinkSync('./notes/'+localTitle+'.json');
                }
            });
        });
    }
}

module.exports = Notebook