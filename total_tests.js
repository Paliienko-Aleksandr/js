
export function reverseArray(num){
  if (!Array.isArray(num)){
    return null
  }
  let res = num.slice()
  let result = []
    result = res.reverse()
    return result
}


export const getAdults = obj => {
  let age = {};
  for (let key in obj){
    if (obj[key] >=18){
    age[key] = obj[key]
    }
  }
 return age
};
getAdults({'John Doe': 19, 'Tom': 17, 'Bob': 18})
