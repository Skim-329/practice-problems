/* exported take */
function take(array, count) {
  var newarray = [];
  for (var i = 0; i < count; i++) {
    if (array.length > 0) {
      newarray.push(array[i]);
    } else {
      newarray.push();
    }
  }
  return newarray;
}
