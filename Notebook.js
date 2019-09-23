const fs = require('fs');
const notesFolderPath = './notes/';
const files = fs.readdirSync(notesFolderPath);

class Notebook {

    printTitlesOfAllNotes() {
        console.log('                            ');
        console.log('List of all current titles: ');
        console.log('----------------------------');
        let visualPositionCounter = 1;
        return files.forEach(file => {
            let contents = fs.readFileSync(`./notes/${file}`);
            let jsonContent = JSON.parse(contents);
            console.log(`${visualPositionCounter}. ${jsonContent.title}`);
            visualPositionCounter++;
        });
    };

    createNewNote(localTitle, localBody) {
        let newNoteObject = {
            title: localTitle,
            body: localBody
        };
        let json = JSON.stringify(newNoteObject);
        fs.writeFileSync(`./notes/${localTitle}.json`, json, 'utf8');
        console.log('Note created successfully');
    };

    readNote(localTitle) {
        return files.forEach(file => {
            let contents = fs.readFileSync(`./notes/${file}`);
            let jsonContent = JSON.parse(contents);
            if (localTitle === jsonContent.title) {
                console.log('                            ');
                console.log(`Reading note with title:   ${localTitle}`);
                console.log(`----------------------------`);
                console.log(`Title:  ${jsonContent.title}`);
                console.log(`Body:  ${jsonContent.body}`);
                return;
            };
        });
    };

    deleteNote(localTitle) {
        return files.forEach(file => {
            let contents = fs.readFileSync(`./notes/${file}`);
            let jsonContent = JSON.parse(contents);
            if (localTitle === jsonContent.title) {
                console.log('                            ');
                console.log(`Deleting note with title: ${localTitle}`);
                fs.unlinkSync(`./notes/${file}`);
                console.log('Note has been deleted successfully');
                return;
            };
        });
    };
};

module.exports = Notebook