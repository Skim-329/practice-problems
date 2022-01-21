function ExampleConstructor() {}
console.log("Value of:", ExampleConstructor.prototype);
console.log("typeof:", typeof ExampleConstructor.prototype);

var constructor = new ExampleConstructor();
console.log("value of:", constructor);

var example = constructor instanceof ExampleConstructor;
console.log("instanceof:", example);
