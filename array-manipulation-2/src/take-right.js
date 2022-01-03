/* exported takeRight */
function takeRight(array, count) {
  var newarray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array.length > 0) {
      newarray.push(array[i]);
    } else {
      newarray.push();
    }
  }
  return newarray;
}
