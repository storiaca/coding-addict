function capitalizeWords(str) {
  const words = str.split(" ").map(word => {
    // let firtsLetter = word.slice(0, 1).toUpperCase();
    // let restWord = word.slice(1);
    // return `${firtsLetter}${restWord}`;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

console.log(capitalizeWords("I got up early today"));
console.log(capitalizeWords("I walked straight to the beach"));