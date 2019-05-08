/**
 * Return first word with greatest number of repeated letters
 */
function countLetters(str) {
  let tempArr = str.split(" ");
  let amount = 1;
  let word = "";
  let countArr = tempArr.map(item => {
    let tempItem = item.toLowerCase().split("");
    
    return tempItem.reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      if(acc[curr] > acc.max) {
        acc.max = acc[curr]
      }
      return acc;
    }, {max: 1, word: item});
  });
  for(let item of countArr) {
    if(item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }

  if(amount > 1) {
    return word;
  }
  return -1;
}
console.log(countLetters("Javascript is the greatest programming language"));
