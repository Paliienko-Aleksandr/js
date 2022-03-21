import {reverseArray, getAdults, withdraw} from './total_tests.js'

                      // reverse array

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
 
                         // get adult

it ('get adult', () =>{
  const result = getAdults({'John Doe': 19, 'Tom': 17, 'Bob': 18});

  expect(result).toEqual({'John Doe': 19, 'Bob': 18});
  
});
it ('get adult', () =>{
  const result = getAdults({'John Doe': 87, 'Tom': 1, 'Bob': 14, 'Jerry': 18});

  expect(result).toEqual({'John Doe': 87, 'Jerry': 18});
  
});
it ('get adult', () =>{
  const result = getAdults({'John Doe': 17.99, 'Tom': 1, 'Bob': 14, 'Jerry': 18.3});

  expect(result).toEqual({'Jerry': 18.3});
  
});

                              // withdraw

it ('get adult', () =>{
  const result = withdraw(['John', 'Ann', 'Alex'], [120, 87, -6], 'John', 50);

  expect(result).toEqual(70);
  
});
it ('get adult', () =>{
  const result = withdraw(['John', 'Ann', 'Alex'], [120, 87, -6], 'Alex', 50);

  expect(result).toEqual(-1);
  
});
it ('get adult', () =>{
  const result = withdraw(['John', 'Ann', 'Alex'], [120, 87, -6], 'John', 120);

  expect(result).toEqual(0);
  
});