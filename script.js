'use strict';

/**
 * @param {number[]} sales
 * @return {number}
 */
function getRevenue(sales) {
  let res = 0;
  for (let i = 0; i < sales.length; i++){
    res += sales[i];
  }
  // console.log(res)
  return res
}

let sales = [25, 40, 10, 58]
/**
 * @param {number[]} sales
 * @param {number} plannedRevenue
 * @return {boolean}
 */
function checkRevenue(sales, plannedRevenue) {
  
  }


let plannedRevenue = 100;
// examples
getRevenue([25, 40, 10, 58]); // returns ==> 133
checkRevenue([25, 40, 10, 58], 100); // returns ==> true
