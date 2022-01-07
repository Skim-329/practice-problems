/* exported truncate */
function truncate(length, string) {
  var shortie = "";
  for (var i = 0; i < length; i++) {
    if (string.length > length) {
      shortie += string[i];
    } else if (string.length < length) {
      shortie = string;
    } else {
      shortie += "";
    }
  }
  return shortie + "...";
}
