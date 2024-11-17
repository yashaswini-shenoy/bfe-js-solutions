// const hey = [];
// // Promise chaining
// console.log(hey[0]?.[0]);

// const some = Symbol("hey");

// const obj = {
//   [some]: "hey",
//   there: "there",
// };

// console.log(obj[some], Reflect.ownKeys(obj));

function hey1(hi) {
  console.log(hi);
}

const n1 = new hey1("ghjak");
const n2 = hey1("ghjak");

// n1 prints instance of hey1, and n2 prints undefined
console.log(n1, n2);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);
const car2 = Car("Eagle", "Talon TSi", 1993);

// car1 is instance of Car, and car2 is undefined
console.log(car1.make, car2);

// Prototye
// New keyword cannot be used for an object or array, can only be used with functions and classes, it returns the prototype

function newFunction() {
  console.log("Heyy");
}

// Functional approach of defining objects
// This is a prototype
// Almost like a class;
var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;

  this.getCourseCount = function () {
    console.log(this.courseCount);
  };
};
// Now this is a normal function, so if you want to invoke it, call it normally
// this keyword points to the window object
var me = User("yash", "Shenoy");

// But if you want to create an object out of it, use the new keyword
// This keyword will point to the yash object
var me1 = new User("yash", 10);
// this keyword will point to the Sam object
var me2 = new User("Sam", 10);
// The above 2 objects are 2 different instances different.

// returns the object User
// User {
// firstName :"yash", courseCount : 10, getCourseCount: f(){}
// }
console.log(me1.getCourseCount(), "kk");
// console.log(User().getCourseCount()); // Throws an error, User.getCourseCount() not allowed
// But this is allowed
console.log(new User("hey", "there").getCourseCount());

// proto
// Such functions that are in attached to the prototype of the User will be found and attached to every instance when callng the new keywrod.
User.prototype.getFirstName = function () {
  console.log(this.firstName, "firstName");
};
me1.getFirstName();
