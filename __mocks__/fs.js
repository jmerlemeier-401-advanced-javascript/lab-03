'use strict';

let fileContents = 'Test String';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {//regex, if file is bad
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from(fileContents));//pass back something truthy. global function
  }
};

exports.writeFile = (file, buffer, cb) => {
  if(file.match(/bad/i) ) {//regex, if file is bad
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    cb(undefined, fileContents);//pass back something truthy. global function
  }
};

//if this module actually modifided data, it would continuously modify things every time test is run.