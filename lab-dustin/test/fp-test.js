'use strict'

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing...Buhler', () => {

  describe('testing map', () => {
    it('should return [2,4,6,8]', () => {
      let result = fp.map([1,2,3,4], n => n*2);
      expect(result).toEqual([2,4,6,8]);
    });
  });
  describe('testing map again', () => {
    it('should return [4,8,2,4]', () => {
      let result = fp.map([2,4,1,2], n => n*2);
      expect(result).toEqual([4,8,2,4]);
    });
  });
  describe('testing filter', () => {
    it('should return [2,1,2]', () => {
      let result = fp.filter([2,4,1,2], n => n < 4);
      expect(result).toEqual([2,1,2]);
    });
  });
  describe('testing filter again', () => {
    it('should return [4]', () => {
      let result = fp.filter([2,4,1,2], n => n > 2);
      expect(result).toEqual([4]);
    });
  });
  describe('testing reduce', () => {
    it('should return 10', () => {
      let result = fp.reduce([2,4,1], (n, m) => n + m);
      expect(result).toEqual(7);
    });
  });
  describe('testing reduce again', () => {
    it('should return 16', () => {
      let result = fp.reduce([3,2,7,6], (a, c) => a + c);
      expect(result).toEqual(18);
    });
  });
  describe('testing concat', () => {
    it('should return [1,2,7,6,9,8,7]', () => {
      let result = fp.concat([1,2,7,6],[9,8,7]);
      expect(result).toEqual([1,2,7,6,9,8,7]);
    });
  });
  describe('testing concat again', () => {
    it('should return [3,2,7,6,1,2,3]', () => {
      let result = fp.concat([3,2,7,6],[1,2,3]);
      expect(result).toEqual([3,2,7,6,1,2,3]);
    });
  });
  describe('testing splice', () => {
    it('should return [2,7,6]', () => {
      let result = fp.splice([3,2,7,6], (2,1));
      expect(result).toEqual([2,7,6]);
    });
  });
  describe('testing splice again', () => {
    it('should return [3,4,5]', () => {
      let result = fp.splice([1,2,3,4,5], (3,2));
      expect(result).toEqual([3,4,5]);
    });
  });
});
