const student = {
  firstName: "Simon",
  lastName: "Kim",
  age: 38,
};

const fullName = student.firstName + " " + student.lastName;
console.log("value of fullName:", fullName);

student.livesInIrvine = false;
student.previousOccupation = "Teacher";

console.log("value of student.livesInIrvine:", student.livesInIrvine);
console.log("value of previousOccupation:", student.previousOccupation);
console.log("value of student:", student);

const vehicle = {
  make: "Ford",
  model: "Bronco",
  year: 1968,
};

vehicle["color"] = "slate gray";
vehicle["isConvertible"] = true;

console.log("value of vehicle[color]:", vehicle["color"]);
console.log("value of vehicle[isConvertible]:", vehicle["isConvertible"]);
console.log("value of vehicle:", vehicle);

const pet = {
  name: "Bobby Blue",
  type: "dog",
};

delete pet.name;
delete pet.type;

console.log("value of pet:", pet);
