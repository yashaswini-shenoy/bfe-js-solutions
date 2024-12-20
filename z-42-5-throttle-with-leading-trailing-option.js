// This is a follow up on 4. implement basic throttle(), please refer to it for detailed explanation.

// In this problem, you are asked to implement a enhanced throttle() which accepts third parameter, option: {leading: boolean, trailing: boolean}

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.
// 4. implement basic throttle() is the default case with {leading: true, trailing: true}.

// Explanation

// for the previous example of throttling by 3 dashes

// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
// with {leading: true, trailing: true}, we get as below

// ─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G
// with {leading: false, trailing: true}, A and E are swallowed.

// ─ ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ G
// with {leading: true, trailing: false}, only A D E are kept

// ─ A ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ E
// with {leading: false, trailing: false}, of course, nothing happens.

// notes

// please follow above spec. the behavior is not exactly the same as lodash.throttle()

// because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.

// Something like below will be used to do the test.

// let currentTime = 0
// const run = (input) => {
//   currentTime = 0
//   const calls = []
//   const func = (arg) => {
//      calls.push(`${arg}@${currentTime}`)
//   }
//   const throttled = throttle(func, 3)
//   input.forEach((call) => {
//      const [arg, time] = call.split('@')
//      setTimeout(() => throttled(arg), time)
//   })
//   return calls
// }
// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])

// SOLUTION

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  // 1. cooling or not
  // 2. call postponed.

  //     1. once called,
  //       - if cooling, stash the call
  //       - if not cooling, run it  and set the timer
  //     2. when time is up, reset cooling
  //       - if stashed call, call it, go to 1
  let timer = null;
  let stashed = null;

  const startCooling = () => {
    timer = window.setTimeout(check, wait);
  };

  const check = () => {
    timer = null;
    if (stashed !== null) {
      func.apply(stashed[0], stashed[1]);
      stashed = null;
      startCooling();
    }
  };

  return function (...args) {
    if (timer !== null) {
      // cooling, stash it
      if (option.trailing) {
        stashed = [this, args];
      }
      return;
    }

    if (option.leading) {
      func.apply(this, args);
      startCooling();
      return;
    }
    if (option.trailing) {
      stashed = [this, args];
      startCooling();
    }
  };
}
