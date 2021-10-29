#!/usr/bin/env node


// test line
//console.log("Hello, Node.JS!");
const axios = require('axios');
const chalk = require('chalk');

//make color in terminal
console.log(chalk.blue('Hello world!'));

//Stylize the terminal
var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});



