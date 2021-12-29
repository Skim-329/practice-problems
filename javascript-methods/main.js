var x = 1;
var y = 2;
var z = 3;

var maximumValue = Math.max(x, y, z);

console.log("The maximum number:", maximumValue);

var heroes = ["Iron Man", "Dr. Strange", "Wonder Woman", "Super Man"];

var randomNumber = Math.random();

var randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log("randomIndex:", randomIndex);

var randomHero = heroes[randomIndex];

console.log("randomHero:", randomHero);

var library = [
  { title: "1984", author: "George Orwell" },
  { title: "Farenheit 451", author: "Ray Bradbury" },
  { title: "The Real Tony Fauci", author: "Bobbie Kennedy" },
];

var lastBook = library.pop();

console.log("lastBook:", lastBook);

var firstBook = library.shift();

console.log("firstBook:", firstBook);

var js = {
  title: "JavaScript for Impatient Programmers",
  author: "Dr. Axel Rauschmayer",
};
var css = {
  title: "CSS Secrets",
  author: "Lea Verou",
};

library.push(js);

library.unshift(css);

library.splice(1, 1);
console.log("library:", library);

var fullName = "Simon Kim";

var firstAndLastName = fullName.split(" ");
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log("sayMyName:", sayMyName);
