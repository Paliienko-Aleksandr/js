import {calc} from './calculator.js'

it ('should return min square numbers from array', () =>{
  const result = calc('4 + 4');

  expect(result).toEqual('4 + 4 = 8');
  
});
it ('should return min square numbers from array', () =>{
  const result = calc('4 * 4');

  expect(result).toEqual('4 * 4 = 16');
  
});
it ('should return min square numbers from array', () =>{
  const result = calc('4 - 4');

  expect(result).toEqual('4 - 4 = 0');
  
});
it ('should return min square numbers from array', () =>{
  const result = calc('4 / 4');

  expect(result).toEqual('4 / 4 = 1');
  
});