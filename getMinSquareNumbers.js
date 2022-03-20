// export const getSquaredArray = arr =>

//   arr.map(num => (num * num))


const getMinSquareNumbers = (arr) =>{

    if (!Array.isArray(arr) || arr.length === 0){
      return null
    }

    let result = arr.map(num => Math.abs(num*num))
    let min = Math.min(...result)

  console.log(min)
  
}
getMinSquareNumbers([1.25, -25, -0.8, 4.75])

