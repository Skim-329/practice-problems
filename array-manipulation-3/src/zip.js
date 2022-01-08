/* exported zip */
function zip(first, second) {
  var zipped = [];
  var currentArray = [];
  var shorter = [];

  if (first.length <= second.length) {
    shorter = first;
  } else {
    shorter = second;
  }
  for (var i = 0; i < shorter.length; i++) {
    currentArray.push(first[i]);
    currentArray.push(second[i]);
    zipped.push(currentArray);
    currentArray = [];
  }
  return zipped;
}
