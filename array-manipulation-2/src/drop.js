/* exported drop */
function drop(array, count) {
  var newarray = [];
  for (var i = count; i < array.length; i++) {
    newarray.push(array[i]);
  }
  return newarray;
}
