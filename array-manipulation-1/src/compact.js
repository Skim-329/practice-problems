/* exported compact */
function compact(array) {
  var falsy;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
