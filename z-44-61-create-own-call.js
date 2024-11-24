// Function.prototype.call is very useful when we want to alter the this of a function.

// Can you implement your own myCall, which returns the same result as Function.prototype.call?

// For the newest ECMAScript spec, thisArg are not transformed. And not replaced with window in Strict Mode.

// Your implementation should follow above spec and do what non Strict Mode does.

// Function.prototype.call/apply/bind and Reflect.apply should not be used.

Function.prototype.mycall = function (thisArg, ...args) {
  // your code here
  thisArg = thisArg || window; // thisArg can be empty
  thisArg = Object(thisArg); // transform primitive value
  let func = Symbol(); // create a unique property
  thisArg[func] = this; // assign the function to a unique method created on the context
  let res = thisArg[func](...args); // call the method with passed args
  delete thisArg[func]; // delete this unique method so as to not cause any sideeffects
  return res;
};

// EXTRA INFO
// CALL POLYFILL
// args is arguments one by one
Function.prototype.mycall = function (context, ...args) {
  // you tie a function into an object(context) as if it belonged to the object
  const symbol = Symbol(); // create unique key

  context = Object(context || window); // set context to windows if null and Create an object to handle primitive values
  // 'this' points to the calling function here
  context[symbol] = this; // assign the function to a unique method created on the context
  const result = context[symbol](...args); // call the function
  delete context[symbol]; // delete the unique key
  return result; // return result
};
// BIND POLYFILL
// bind returns a func which when called behave like apply, call
Function.prototype.mybind = function (context, ...args) {
  const symbol = Symbol();
  context[symbol] = this;

  return function () {
    const result = context[symbol](...args); // call the function
    delete context[symbol]; // delete the unique key
    return result; // return result
  };
};
// APPLY POLYFILL
// code exact same as call just the args is an array here so need to destruct(...)
Function.prototype.myapply = function (context, args) {
  // you tie a function into an object(context) as if it belonged to the object
  const symbol = Symbol(); // create unique key

  context = Object(context || window); // set context to windows if null and Create an object to handle primitive values
  // 'this' points to the calling function here

  context[symbol] = this; // assign the function to a unique method created on the context
  const result = context[symbol](...args); // call the function
  delete context[symbol]; // delete the unique key
  return result; // return result.
};
// Testing
let obj = {
  a: 10,
  b: 20,
};
function tester(a, b) {
  return `a: ${this.a} and b: ${this.b} | curr args a: ${a} and b: ${b}`;
}
console.log(tester.mycall(obj, 30, 40));
const bindFunc = tester.mybind(obj, 30, 40);
console.log(bindFunc());
console.log(tester.myapply(obj, [30, 40]));
