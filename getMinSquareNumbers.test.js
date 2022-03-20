import {getMinSquareNumbers} from './getMinSquareNumbers.js'

it ('should return min square numbers from array', () =>{
  const result = getMinSquareNumbers([1, 2, 3, 4]);

  expect(result).toEqual(1);
});