/* exported capitalize */
function capitalize(word) {
  var first = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    var rest = word[i];
    var ending = rest.toLowerCase();
    first += ending;
  }
  return first;
}
