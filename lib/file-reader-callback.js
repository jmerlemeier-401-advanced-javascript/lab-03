'use strict';
//module

const fs = require('fs');

const file = process.argv[2]; //looks at command line input. 2nd index because file name.

const reader = (file, cb) => {
  fs.readFile(file, (err, data) => {
    console.log(err);
    if (err) {
      cb(err);
    } else { 
      cb(null, JSON.parse(data));
    }
  });
};

//create a write function
const writer = (file, cb) => {
  fs.writeFile(file, (err, data) => {
    console.log(err);
    if (err) {
      cb(err);
    } else {
      cb(null, data.toString().trim()); //maybe call another function
    }
  });
};

//export those to index and that is where will do nested call.

reader('/Users/julie/codefellows/401/lab-03/data/person.json', console.log);

module.exports = {reader, writer};