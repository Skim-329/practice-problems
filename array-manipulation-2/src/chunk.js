/* exported chunk */
function chunk(array, size) {
  var newArray = [[subArray] + [finalArray]];
  var subArray = [];
  var finalArray = [];
  if (array.length > size) {
    for (var i = 0; i < size; i++) {
      subArray.push(array[i]);
    }
    for (var i = size; i < array.length; i++) {
      finalArray.push(array[i]);
    }
  } else if (array === 0) {
    newArray.push();
  }
  return newArray;
}
