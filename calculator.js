
export const getSquaredArray = arr => {
  arr.map(num => num * num)

  return getSquaredArray()
};


export const getOddNumbers = arr => {
  arr.filter(num => (num % 2 === 1))

  return getOddNumbers()
};

export default (a,b) => a + b