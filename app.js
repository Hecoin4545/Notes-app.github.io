const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./node.js');
yargs.command({
    command:'add',
    description: 'Pls Add A New Note',
    builder:{
title:{
    description:'Pls add A title for your note',
    demandOption: true,
    type: 'string'
},
body:{
    description:'Pls Add A Body For Your Note',
    demandOption: true,
    type: 'string'
}
    },
    handler:function(argv){
       notes.addNotes(argv.title , argv.body)
    }
})

yargs.command({
    command:'remove',
    description: 'Pls Remove A Old Note',
    builder:{
title:{
    description:'Pls Remove Any Of The Previous Note By Writing The Title',
    demandOption: true,
    type: 'string'
}
    },
    handler:function(argv){
       notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    description: `Pls Type 'List' Command To See All The Items `,

    handler:function(argv){
       notes.listNotes(argv);
    }
})

yargs.command({
    command:'read',
    description: 'Pls Give Title So That We Can Find Your Note',
    builder:{
title:{
    description:'Pls Give Title So that We Can Find Note',
    demandOption: true,
    type: 'string'
}
    },
    handler:function(argv){
       notes.readNotes(argv.title)
    }
})
yargs.parse()