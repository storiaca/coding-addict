/**
 * Arithmetic, Geometric or No pattern
 * no negative numbers
 */

function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }
  if (arith.size === 1) {
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "Geometric";
  }

  return -1;

  /**
   * Example without Set()
   */
  // let arith = [];
  // let geo = [];
  // for (let i = 1; i < arr.length; i++) {
  //   let number1 = arr[i] - arr[i - 1];
  //   arith.push(number1)
  //   let number2 = arr[i] / arr[i - 1];
  //   geo.push(number2);
  // }
  // if (arith.every(a => a === arith[0])) {
  //   return "Arithemtic"
  // } else if (geo.every(g => g === geo[0])) {
  //   return "Geometric"
  // }
  // return -1;
}

console.log(mathSequences([2, 4, 6, 8]));
// "Arithmetic"
console.log(mathSequences([3, 9, 27]));
// "Geometric"
console.log(mathSequences([2, 5, 14, 89]));
// -1
