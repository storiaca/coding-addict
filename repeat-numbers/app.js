/**
 * Return number with most repeats
 * if two numbers the repeated the same return first
 * if none repeated return -1
 */
function testRepeat(arr) {
  let max = 1;
  let position = 0;
  let value = -1;
  let tempNumbers = arr.reduce((acc, curr, index) => {
    acc[curr] = acc[curr] ? {...acc[curr], amount: acc[curr].amount + 1} : {amount:1, index: index};
    let amount = acc[curr].amount;
    let place = acc[curr].index;
    if(amount > max) {
      max = amount;
      value = curr;
      position = place;
    }
    if(amount === max && place <= position) {
      max = amount;
      value = curr;
      position = place;
    }
    return acc;
  }, {});
  return value;
}

console.log(testRepeat([5,2,2,1,5]));
// return 5
console.log(testRepeat([6,5,5,10,10,10]));
// return 5
console.log(testRepeat([3,4,1,6,10]));
// return 5