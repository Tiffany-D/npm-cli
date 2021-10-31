#!/usr/bin/env node


//test line
//console.log("Hello, Node.JS!");
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




//Variables
const axios = require('axios');
const chalk = require('chalk');
const country = require('country-list');
const api ='https://date.nager.at/api/v3/PublicHolidays/';

//Get the year (4 digits)
const day = new Date();
let year = day.getFullYear();
console.log(year);

// messages to the user
const messageUserCountry = ('Enter a country');
const messageUserYear = ('Enter the year');

const publicHolydays = async (response) => {
    const response = await axios('api');
    const getCountry = response.country;
    const getYear = response.year;
    const countryCode = response.getCode;

   
}




