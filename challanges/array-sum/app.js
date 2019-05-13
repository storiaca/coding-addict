/**
 * Array sum if all numbers in array are equal
 * to largest number in array return true
 */
function ArraySum(arr) {
  let tempArr = arr.sort((a,b) => {
    return a-b;
  });
  let largest = tempArr.pop();
  let number = 0;
  tempArr.forEach(item => number += item);
  return largest === number;
}

console.log(ArraySum([1,6,4,2,13]));
// returns true 1+2+4+6=14
console.log(ArraySum([1,2,4,34,22]));
// returns false 1+2+4+22=29 29!=34