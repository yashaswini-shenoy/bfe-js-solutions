// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'

// This is a JavaScript coding problem from BFE.dev

// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
// But seemingly this is not currying
function curry(fn, args = []) {
  return function hey(...args1) {
    // Always change local array and not the parent aarray
    args1 = args.concat(args1);
    if (args1.length >= fn.length) {
      return fn(...args1);
    }

    return curry(fn, [...args1]);
  };
}
