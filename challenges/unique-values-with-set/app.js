/**
 * Unique values using Set() data structure 
 */

 function unique(str) {
   return new Set(str).size === str.length;
  // Longer way
  //  let tempStr = new Set();
  //  for(let letter of str) {
  //    if(tempStr.has(letter)) {
  //      return false;
  //    }
  //    tempStr.add(letter);
  //  }
  //  return true;
 }

 console.log(unique("abcd"));
 // returns true
 console.log(unique("abcdade"));
 // returns false ad = duplicate
 
 