var bookList = [
  { isbn: "012345", title: "Genesis", author: "God" },
  { isbn: "222222", title: "Exodus", author: "Moses" },
  { isbn: "135791", title: "Kings", author: "David" },
];

console.log("books:", bookList);
console.log("typeof: ", typeof bookList);

var serial = JSON.stringify(bookList);
console.log("JSONbooks:", serial);
console.log("typeof: ", typeof serial);

var JSONstudents = '{ "id": 123, "name": "Homer" }';
console.log("student", JSONstudents);
console.log("typeof: ", typeof JSONstudents);

var parsed = JSON.parse(JSONstudents);
console.log("parsed:", parsed);
console.log("typeof:", typeof parsed);
