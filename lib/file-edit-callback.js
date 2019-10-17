'use strict';

const fs = require('fs');

//=== File System Method for Reading a file ===
/**
 * @param {string} file - relative path to the file
 * @param {function} callback - error first callback function to handle bath path.
 */
exports.reader = (file, cb) => {
  fs.readFile(file, (err, data) => {
    console.log(err);
    if (err) {
      cb(err);
    } else { 
      try {
        cb(null, JSON.parse(data.toString()));
      } catch (e) {
        cb(e);
      }
    }
  });
};

//=== File System Method for Writing a file ===
//fs.writeFile takes in a file path and a buffer.
/**
 * 
 */
exports.writer = (file, cb) => {
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

// ALT OPTION :    module.exports = {reader: () => {}, writer: () => {}};