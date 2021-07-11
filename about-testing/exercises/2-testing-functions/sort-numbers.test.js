'use strict';

/**
 * Sorts an array of numbers from smallest to largest.
 * Returns a new array without modifying the original array.
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortNumbers([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */
const sortNumbers = (arrOfNumbers = []) => {
  // create a copy of the argument to avoid side-effects
  const copiedAndSorted = [...arrOfNumbers];

  // sort the elements in the copied array
  copiedAndSorted.sort((a, b) => a - b);

  // return the copied & sorted array of numbers
  return copiedAndSorted;
};

describe('sortNumbers sorts an array of numbers', () => {
  // test positive numbers
  describe('test positive numbers', () => {
    it('positive number', () => {
      const expected = [1, 2, 3];
      const actual = sortNumbers([2, 1, 3]);
      expect(actual).toEqual(expected);
    })
  });
  
  // test negative numbers
  describe('test negative numbers', () => {
    it('negative number', () => {
      const expected = [-8, -3, -2, -1];
      const actual = sortNumbers([-1, -3, -8, -2]);
      expect(actual).toEqual(expected);
    })
  });
  // test decimal numbers
  describe('test decimal numbers', () => {
   it('decimal number', () => {
      const expected = [0.7, 3.7, 5.9, 10.1];
      const actual = sortNumbers([5.9, 0.7, 10.1, 3.7]);
      expect(actual).toEqual(expected);
    })   
  });
  // test everything all together
  describe('any number', () => {
  it('any number', () => {
      const expected = [-15, 10.1, 30];
      const actual = sortNumbers([30, -15, 10.1]);
      expect(actual).toEqual(expected);
    })  
  });
  // test for side-effects
  describe('', () => {
 it('any number', () => {
      const arr = [5, 9.5, -45];
      sortNumbers(arr);
      expect(arr).toEqual([5, 9.5, -45]);
    })     
  });
});
