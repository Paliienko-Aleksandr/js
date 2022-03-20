// export const getSquaredArray = arr =>

//   arr.map(num => (num * num))

let arr = [1,2,3,4]
export default (arr) =>{

    if (!Array.isArray(arr) || arr.length === 0){
      return null
    }

    let result = arr.map(num => Math.abs(num))
    let min = Math.min(...result)

   console.log(min)
  
}


