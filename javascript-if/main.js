/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function isEven(number) {
  if (number % 2) {
    console.log("false");
  } else {
    console.log("true");
  }
}

function startsWithJ(string) {
  if (string[0] === "J") {
    console.log("true");
  } else {
    console.log("false");
  }
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    console.log("false");
  } else {
    console.log("true");
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 15) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  console.log("false");
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    console.log("neutral");
  } else if (pH > 7 && pH <= 14) {
    console.log("base");
  } else if (pH >= 0 && pH < 7) {
    console.log("acid");
  } else {
    console.log("invalid pH level");
  }
}

function introduceWarnerBro(name) {
  if (name === "yakko" || name === "wakko") {
    console.log("We're the warner brothers!");
  } else if (name === "dot") {
    console.log("I'm cute~");
  } else {
    console.log("Goodnight everyone!");
  }
}
