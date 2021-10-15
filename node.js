const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const addNotes = (title,body)=>{
    const notes = loadNotes();
    const duplicates = notes.filter((notes)=>{
        return notes.title == title
    })
    if(duplicates.length == 0){
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.green.bold('Your Note Is Sucessfully Added :)'));
    }else{
        console.log(chalk.red.bold('Sorry ,This Note Is Already Been Added :( '));
    }
    saveNotes(notes)
}

const removeNote = function(title){
    let notes = loadNotes();

    let notesTokeep = notes.filter(function(notes){
        return notes.title !== title
    })
    if(notes.length > notesTokeep.length ){
console.log(chalk.red.bold(`Notes Removed :( `));
    }else{
        console.log(chalk.green.bold('Not Found :) '));

    }
    saveNotes(notesTokeep)
}


const loadNotes = ()=>{
    try{
        const readingFile = fs.readFileSync('notesStore.json');
        const toStringit = readingFile.toString();
        const parsingIt = JSON.parse(toStringit);
        return parsingIt;
    }catch(e){
return []
    }
}
const listNotes = ()=>{
    const notes = loadNotes();
notes.forEach((e)=>{
   console.log(chalk.red.bold('Title: ') + chalk.yellow.bold(e.title));
   console.log(chalk.red.bold('Body: ') + chalk.yellow.bold(e.body));
})
    saveNotes(notes)
}

const readNotes = (title)=>{
 const notes = loadNotes();
const note = notes.find((note)=>{
    return note.title == title
})
if(note){
    console.log(chalk.red.bold(`Your Title: `) + chalk.yellow.bold( note.title));
    console.log(chalk.red.bold(`Your Body: `) + chalk.yellow.bold(note.body));
}else{
    console.log('note not found');
}
}


const saveNotes = (notes)=>{
    const stringfyit = JSON.stringify(notes);
    const writingIt = fs.writeFileSync('notesStore.json',stringfyit);
    return writingIt;
}

module.exports = {
    addNotes:addNotes,
    saveNotes:saveNotes,
    loadNotes:loadNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}