/**
 * Regex Palindrome
 */
function checkPalindrome(str) {
  let tempStr = str
    .match(/[a-z0-9]+/gi)
    .join("")
    .toLowerCase();
  //console.log(tempStr);
  let second = tempStr
    .split("")
    .reverse()
    .join("");
  //console.log(second);
  return tempStr === second;
}

console.log(checkPalindrome("Was it a car or a cat I saw"));
// true
console.log(checkPalindrome("Red -rum-, sir, -is-murder"));
// true
console.log(checkPalindrome("I got up early this morning"));
// false
