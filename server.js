require('dotenv').config()

console.log(`Hi my name is ${process.env.MY_LASTNAME} ${process.env.MY_FIRSTNAME}, I live in ${process.env.MY_CITY} and my favorite language is ${process.env.MY_LANGUAGE}`);