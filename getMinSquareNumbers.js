// export const getSquaredArray = arr =>

//   arr.map(num => (num * num))


export const getMinSquareNumbers = (arr) =>{

    if (!Array.isArray(arr) || arr.length === 0){
      return null
    }

    let result = arr.map(num => Math.abs(num*num))
    let min = Math.min(...result)

  return min
  
}


