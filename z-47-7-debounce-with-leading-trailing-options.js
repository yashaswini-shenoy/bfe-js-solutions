// This is a follow up on 6. implement basic debounce(), please refer to it for detailed explanation.

// In this problem, you are asked to implement an enhanced debounce() which accepts third parameter, option: {leading: boolean, trailing: boolean}

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.
// 6. implement basic debounce() is the default case with {leading: false, trailing: true}.

// for the previous example of debouncing by 3 dashes

// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
// with {leading: false, trailing: true}, we get as below

// ─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G
// with {leading: true, trailing: true}:

// ─ A ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ E ─ ─ ─ ─ ─ ─ G
// with {leading: true, trailing: false}

// ─ A ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ E
// with {leading: false, trailing: false}, of course, nothing happens.

// notes

// please follow above spec. the behavior might not be exactly the same as lodash.debounce()

// because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.

// Something like below will be used to do the test.

// let currentTime = 0
// const run = (input) => {
//   currentTime = 0
//   const calls = []
//   const func = (arg) => {
//      calls.push(`${arg}@${currentTime}`)
//   }
//   const debounced = debounce(func, 3)
//   input.forEach((call) => {
//      const [arg, time] = call.split('@')
//      setTimeout(() => debounced(arg), time)
//   })
//   return calls
// }
// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@6'])

// SOLUTION
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return function (...args) {
    let isInvoked = false;
    // if not cooling down and leading is true, invoke it right away
    if (timer === null && option.leading) {
      func.call(this, ...args);
      isInvoked = true;
    }
    // no matter what, timer needs to be reset
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (option.trailing && !isInvoked) {
        func.call(this, ...args);
      }
      timer = null;
    }, wait);
  };
}
