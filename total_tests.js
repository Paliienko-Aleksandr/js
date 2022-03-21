
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
  console.log(age)
 return age
};
getAdults({'John Doe': 87, 'Tom': 1, 'Bob': 14, 'Jerry': 18.3});


export function withdraw(clients, balances, client, amount){
  let indexOfPerson = clients.indexOf(client);
  let res;

  if (balances[indexOfPerson] >= amount){
    res = balances[indexOfPerson] -= amount;
    console.log(res)
    return res;
  }else if(balances[indexOfPerson] < amount){
    return -1;

  }

}

withdraw(['John', 'Ann', 'Alex'], [120, 87, -6], 'John', 50)
