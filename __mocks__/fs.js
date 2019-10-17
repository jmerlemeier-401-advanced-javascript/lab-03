'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => { //takes in a string file AND callback
  if( file.match(/bad/i) ) {//regex, if file is bad
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from('File Contents'));//pass back something truthy. global function
  }
};

//if this module actually modifided data, it would continuously modify things every time test is run.