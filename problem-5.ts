// problem 5. get Property
function getProperty<T, K extends keyof T>(parson: T, name: K): T[K] {
  return parson[name];
}

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
