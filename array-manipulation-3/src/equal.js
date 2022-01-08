/* exported equal */
function equal(first, second) {
  let equalIndex = 0;
  for (let i = 0; i < first.length; i++) {
    for (let x = 0; x < second.length; x++) {
      if (i === x && first[i] === second[x]) {
        equalIndex++;
      }
    }
  }
  return equalIndex === first.length && equalIndex === second.length;
}
