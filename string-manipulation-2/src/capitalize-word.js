/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = "";
  if (word.toLowerCase() === "javascript") {
    newWord = "JavaScript";
  } else {
    for (var i = 0; i < word.length; i++) {
      var first = word[0].toUpperCase();
      var second = word.slice(1).toLowerCase();
      newWord = first + second;
    }
  }
  return newWord;
}
