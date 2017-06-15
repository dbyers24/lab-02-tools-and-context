'use strict';

const fp = module.exports = {};

fp.map = (arr, callback) => Array.prototype.map.call(arr, callback);

fp.filter = (arr, callback) => Array.prototype.filter.call(arr, callback);

fp.reduce = (arr, callback) => Array.prototype.reduce.call(arr, callback);

fp.concat = (arr, ...args) => Array.prototype.concat.apply(arr, args);

fp.splice = (arr, ...arg) => Array.prototype.splice.apply(arr, arg);
