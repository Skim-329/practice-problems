function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(3);
console.log("How many seconds in a minute?:", convertMinutesToSecondsResult);

function greet(name) {
  var greeting = "Hey, " + name;
  return greeting;
}

var greetingResult = greet("Bob");
console.log("The greeting!:", greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(3, 5);
console.log("Result of area:", areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameResult = getFirstName({ firstName: "Good", lastName: "Guy" });
console.log("The guy's first name:", firstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElement(["It", "is", "what", "it", "is!"]);
console.log("This is the last element:", lastElementResult);
