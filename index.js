'use strict';

//entry file

//add the ability to actually add files look at fs write file methods
//we want to read the file and write information to a new file
//write that takes a buffer
//findout what is in the file, how can I change it and rewrite the file
// redo as promise and await
// add tests

const file = process.argv[2]; //looks at command line input. 2nd index because file name.

const useCallback = require('./lib/file-edit-callback');
// const usePromise = require('./lib/file-edit-promise');
// const useAwait = require('./lib/file-edit-await');

//Handles the reader
useCallback.reader(file, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});