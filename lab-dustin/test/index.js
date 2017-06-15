'use strict';

const peaches = require('./lib/fp.js');

const upperCase = module.exports = () => {
  let thing1 = process.argv;
  thing1 = peaches.map(thing1, word => word.toUpperCase());
  console.log(thing1);
  return thing1;
};

upperCase();
