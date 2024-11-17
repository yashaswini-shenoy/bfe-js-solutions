// Object.assign() could be used to do shallow copy, while for recursive deep copy, _.cloneDeep could be very useful.

// Can you create your own _.cloneDeep()?

// The lodash implementation actually covers a lot of data types, for simplicity, your code just need to cover

// primitive types and their wrapper Object
// Plain Objects (Object literal) with all enumerable properties
// Array
// There is built-in structuredClone() now, but don't use this to practice

// How to use symbols
// const sym1 = Symbol("foo");

// Symbol kind of object keys
// const obj = {
//   [sym1]: "value1",
//   key1: "value2",
//   key2: "value3",
// };
// const sym1 = Symbol("hey1");
// const sym2 = Symbol("hey2");

// SOUTION

function cloneDeep(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // Check the object is already stored in our map, if yes, return it right away.
  // Ths is typically to avoid circular dependency.
  // obj = [1, { c: {} }];
  // obj.c = obj;
  if (map.has(obj)) {
    return map.get(obj);
  }
  // Check if the obj is an array
  const output = Array.isArray(obj) ? [] : {};
  // Set in map initially, to avoid circular error later on.
  // anytime this data is encountered next time onwards, we will just return this output object.
  map.set(obj, output);
  // Get both symbol and normal keys of object
  const keys = [...Object.getOwnPropertySymbols(obj), ...Object.keys(obj)];
  for (const key of keys) {
    const val = obj[key];
    output[key] = cloneDeep(val, map);
  }
  return output;
}
