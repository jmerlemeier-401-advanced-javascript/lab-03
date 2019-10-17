'use strict';
//module

const fs = require('fs');
// const util = require('util');

const file = process.argv[2]; //looks at command line input. 2nd index because file name.

const reader = (file, cb) => {
  fs.readFile(file, (err, data) => {
    console.log(err);
    if (err) {
      cb(err);
    } else { 
      cb(null, data.toString().trim()//maybe call another function); 
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
      cb(null, data.toString().trim()//maybe call another function);
    }
  });
};

//export those to index and that is where will do nested call.

reader(file);

module.exports = {reader, writer};