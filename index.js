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
const { blue, yellow } = require('chalk');
const chalk = require('chalk');
const readlineSync = require("readline-sync");
const country = require('country-list');
const api ='https://date.nager.at/api/v3/PublicHolidays/';

//Get the year (4 digits)
const day = new Date();
let year = day.getFullYear();
//console.log(year);



// messages to the user

const messageUserCountry =readlineSync.question(chalk.blue('Enter a country:'));
const messageUserYear = readlineSync.question(chalk.yellow('Enter the year:'));


const publicHolydays = async () => {
    const responseUser = await (messageUserCountry, messageUserYear);
    const getCountry = responseUser.messageUserCountry;
    const getYear = responseUser.messageUserYear;
    const countryCode = responseUser.country;

   try {
       const arrayDaysHolidates = await axios.get(`${api}${year}/${countryCode}`);
       console.log(arrayDaysHolidates);
       const apiItems = Array.from(arrayDaysHolidates.data);
       apiItems.forEach((e) => {
           console.log(chalk.greenBright(`${getCountry}${getYear}/${arrayDaysHolidates}`));
    
       });
   } catch (error) {
       console.log(chalk.bgRed('Invalid data'));
   }
}
publicHolydays();



