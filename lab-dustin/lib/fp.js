'use strict';

const fp = module.exports = {};

fp.map = (arr, callback) => Array.prototype.map.call(arr, callback);

fp.filter = (arr, callback) => {
  if (typeof arr === 'object');
  return Array.prototype.filter.call(arr, callback);
  throw new Error('Error');
};

fp.reduce = (arr, callback, arg) => {
  if (typeof arr === 'object');
  return Array.prototype.reduce.call(arr, callback, arg);
  throw new Error('Error');
};

fp.concat = (arr, ...args) => {
  if (typeof arr === 'object');
  return Array.prototype.concat.apply(arr, args);
  throw new Error('Error');
};

fp.splice = (arr, ...arg) => {
  if (typeof arr === 'object');
  return Array.prototype.splice.apply(arr, arg);
  throw new Error('Error');
};
