const cleanTransactionsList = transactions => {
     let finalArray = [];
    for (let i = 0; i < transactions.length; i++){
        let res = (transactions[i]);
        res = Number(res);
        if (!Number.isNaN(res)){
            
            finalArray.push('$' + res.toFixed(2));
        }
    }
   console.log(finalArray)
}
 
cleanTransactionsList(['  1.9', '16.4', 89, '1 dollar ', 189, 'six'])









