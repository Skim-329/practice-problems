/* exported unique */
function unique(array) {
  var uniqueArray = [];
  var repeated = false;
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < uniqueArray.length; x++) {
      if (array[i] === uniqueArray[x]) {
        repeated = true;
      }
    }
    if (repeated === false) {
      uniqueArray.push(array[i]);
    }
    repeated = false;
  }
  return uniqueArray;
}
