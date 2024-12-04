// Python supports negative list index , while JavaScript doesn't.

// Can you write a wrapper function to make negative array index possible?

// const originalArr = [1,2,3]
// const arr = wrap(originalArr)
// arr[0] // 1
// arr[1] // 2
// arr[2] // 3
// arr[3] // undefined
// arr[-1] // 3
// arr[-2] // 2
// arr[-3] // 1
// arr[-4] // undefined
// All methods on arr should be applied to the original array, which means

// arr.push(4)
// arr[3] // 4
// originalArr[3] // 4
// arr.shift()
// arr[0] // 2
// originalArr[0] // 2
// arr.bfe = 'bfe'
// originalArr.bfe // 'bfe'
// arr[-1] = 5
// arr // [2,3,5]
// originalArr // [2,3,5]
// originalArr[2] = 6
// arr // [2,3,6]
// originalArr // [2,3,6]

// SOLUION
/**
 * @param { any[] } arr
 * @returns { ? }
 */
function wrap(arr) {
  // your code here
  return new Proxy(arr, {
    get(target, prop) {
      // if used ast iterable
      if (prop === Symbol.iterator) {
        return target[prop].bind(target);
      }

      let index = parseInt(prop, 10);
      if (index < 0) {
        index += arr.length;
        return target[index];
      }
      return target[prop]; // using target[index] here doesn't work for some reason.
    },
    set(target, prop, value) {
      let index = parseInt(prop, 10);
      if (index < 0) {
        index += arr.length;
        target[index] = value;

        if (index < 0) {
          throw new Error("index is overflow");
        }
        return true;
      }

      target[prop] = value; // using target[index] here doesn't work for some reason.
      return true;
    },
  });
}
