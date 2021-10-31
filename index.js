#!/usr/bin/env node


// test line
//console.log("Hello, Node.JS!");

//node packages
const axios = require('axios');
const chalk = require('chalk');
const countryList = require('country-list');
//console.log('countryList');

//make color in terminal
//console.log(chalk.magenta('Join the dark side, we have cookies!!'));

//Stylize the terminal
// var figlet = require('figlet');

// figlet('Unicorn World', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });


//Start code here
//Get the year (4 digits)
const day = new Date();
let year = day.getFullYear();
console.log(year);

//Get method
const api =`https://date.nager.at/api/v3/PublicHolidays/${year}/AT`;
axios.get('api').then((response)=>{
    console.log(response.year);
})

//console.log(axios('api'));