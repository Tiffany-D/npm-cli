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
const readlineSync = require("readline-sync");
const country = require('country-list');


//Get the year (4 digits)
const day = new Date().getFullYear();
//console.log(year);

const api ='https://date.nager.at/api/v3/PublicHolidays/';

// messages to the user

const messageUserCountry =readlineSync.question(chalk.blue('Enter a country:'));
//const messageUserYear = readlineSync.question(chalk.yellow('Enter the year:'));
const countryCode = country.getCode(messageUserCountry);

const publicHolidays = async () => {
    
   try {
       const arrayDaysHolidates = await axios.get(`${api}${day}/${countryCode}`);
       const apiItems = Array.from(arrayDaysHolidates.data);
       apiItems.forEach((element) => {
           console.log(chalk.greenBright(`${element.name}/${element.date}`))
    
       });
   } catch (error) {
       console.log(chalk.bgRed('Invalid data'));
   }
    //console.log(publicHolidays);
}
publicHolidays(day, countryCode);
//console.log(countryCode);
//console.log(day);

       
