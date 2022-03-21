import {reverseArray, getAdults} from './total_tests.js'

it ('reverse', () =>{
  const result = reverseArray([10, 20, 30, 50, 90, 1458]);

  expect(result).toEqual([1458, 90, 50, 30, 20, 10]);
  
});
it ('reverse', () =>{
  const result = reverseArray([140, 1, 0.35, 10, 90, -90]);

  expect(result).toEqual([-90, 90, 10, 0.35, 1, 140]);
  
});
it ('reverse', () =>{
  const result = reverseArray([0.005, 1, 8]);

  expect(result).toEqual([8, 1, 0.005]);
  
});
 
it ('get adult', () =>{
  const result = getAdults({'John Doe': 19, 'Tom': 17, 'Bob': 18});

  expect(result).toEqual({'John Doe': 19, 'Bob': 18});
  
});
