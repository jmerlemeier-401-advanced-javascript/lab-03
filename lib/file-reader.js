'use strict';
//module

const fs = require('fs');
const util = require('util');


const reader = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      cb(err);
    } else { 
      cb(null, data.toString().trim()); }
  });
};


// What if we wanted to export this as a promise instead?
const readFilePromise = util.promisify(fs.readFile);
const readerPromise = (file) => {
  return readFilePromise(file)
    .then(data => data.toString().trim())
    .catch(error => error);
};


module.exports = reader;