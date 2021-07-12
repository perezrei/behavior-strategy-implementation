'use strict';

/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
const howSimilarAre = (a, b) => {
  if(a === b){
    return 'exactly the same';
  } 
  if(Object.is(a, b)){
    return 'exactly the same';
  }
  if(typeof a === typeof b) {
    return "the same type";
  }
  if(typeof a !== typeof b) {
    return 'nothing alike';
  }
    

};

describe('determine how similar two values are', () => {
  describe('exactly the same', () => {
    const expected = 'exactly the same';
    it('1000 and 1e3', () => {
      const actual = howSimilarAre(1000, 1e3);
      expect(actual).toEqual(expected);
    });
    it('NaN and NaN', () => {
      const actual = howSimilarAre(NaN, NaN);
      expect(actual).toEqual(expected);
    });
    it('"hello" and "hello"', () => {
      const actual = howSimilarAre('hello', 'hello');
      expect(actual).toEqual(expected);
    });
    it(' and ', () => {
      const actual = howSimilarAre('hello', 'hello');
      expect(actual).toEqual(expected);
    });
  });
  describe('the same type', () => {
    const expected = 'the same type';
    it('"hello" and "goodbye"', () => {
      expect(howSimilarAre('hello', 'goodbye')).toEqual(expected);
    });
    it('100 and -100', () => {
      expect(howSimilarAre(100, -100)).toEqual(expected);
    });
    it('true and false', () => {
      expect(howSimilarAre(true, false)).toEqual(expected);
    });
    it('[] and null', () => {
      expect(howSimilarAre([], null)).toEqual(expected);
    });
  });
  describe('nothing alike', () => {
    it('true and 10', () => {
      expect(howSimilarAre(true, 10)).toEqual('nothing alike');
    });
    it('"asdf" and { hi: "mom" }', () => {
      expect(howSimilarAre('asdf', { hi: 'mom' })).toEqual('nothing alike');
    });
    it('null and undefined', () => {
      expect(howSimilarAre(null, undefined)).toEqual('nothing alike');
    });
    it('"4" and 4', () => {
      expect(howSimilarAre('4', 4)).toEqual('nothing alike');
    });
  });
});
