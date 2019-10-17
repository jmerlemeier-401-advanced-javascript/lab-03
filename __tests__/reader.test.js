'use strict';

//creates a mock module of node modules like js or buffer. grab raeder and describe what test shoudl be doing.

jest.mock('fs');

const fileReader = require('../lib/file-reader-callback');

//======== CALLBACK TEST ===========
//BAD PATH
describe('Testing file', () => {
  it ('Throws err when bad file path is given', (done) => {
    let file = `${__dirname}../data/bad.txt`;
    fileReader(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toEqual('Invalid File');
      done();
    });
  });
  //GOOD PATH
  it ('Returns text when proper file is given', (done) => {
    let file = `${__dirname}../data/person.json`;
    fileReader(file, (err, data) => {
      expect(err).toBe(null);
      expect(data).toBeDefined();
      done();
    });
  });
});

//======== PROMISE TEST ===========


//======== ASYNC/AWAIT TEST ===========

