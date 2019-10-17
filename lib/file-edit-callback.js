'use strict';

const fs = require('fs');

// TODO
//have data, read it, modify, and then pass back.


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
 * @param {string} file - the location to write data to
 * @param {buffer} text - a text info to write ta the provided file path.
 * @param {function} callback 
 */
exports.writer = (file, text, cb) => {
  try {
    let bufferText = JSON.stringify(text) || text;
    const buffer = Buffer.from(bufferText);
    fs.writeFile(file, buffer, cb);
  } catch (e) {
    cb(e);
  }
};

//export those to index and that is where will do nested call.

// ALT OPTION :    module.exports = {reader: () => {}, writer: () => {}};