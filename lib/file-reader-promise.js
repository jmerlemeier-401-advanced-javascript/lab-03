'use strict';

const fs = require('fs');
// const util = require('util');

// What if we wanted to export this as a promise instead?
const readFilePromise = util.promisify(fs.readFile);
const readerPromise = (file) => {
  return readFilePromise(file)
    .then(data => data.toString().trim())
    .catch(error => error);
};