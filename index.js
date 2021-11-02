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
const { getCode } = require('country-list');
const country = getCode;

//Get the year (4 digits)
const day = new Date();
let year = day.getFullYear();
//console.log(year);

const api =`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`;

// messages to the user

const messageUserCountry =readlineSync.question(chalk.blue('Enter a country:'));
const messageUserYear = readlineSync.question(chalk.yellow('Enter the year:'));


const publicHolydays = async (year, country) => {
     await `${messageUserCountry}/${messageUserYear}`;
    
   try {
       const arrayDaysHolidates = await axios.get(`${api}${year}/${country}`);
       arrayDaysHolidates.forEach((element) => {
           console.log(chalk.greenBright(`${element.messageUserCountry}/${element.messageUserYear}`))
    
       });
   } catch (error) {
       console.log(chalk.bgRed('Invalid data'));
   }
}
publicHolydays();


       
