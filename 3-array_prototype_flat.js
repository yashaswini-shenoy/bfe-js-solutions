// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

// const arr = [1, [2], [3, [4]]];
// flat(arr)
// // [1, 2, 3, [4]]
// flat(arr, 1)
// // [1, 2, 3, [4]]
// flat(arr, 2)
// // [1, 2, 3, 4]
// follow up

// Are you able to solve it both recursively and iteratively? How do you handle sparse array?

// SOLUTION
/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  let flatArray = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      flatArray = flatArray.concat(flat(item, depth - 1));
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
}

// Using stack
/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  const flatArray = [];
  let stack = [...arr.map((item) => [item, depth])];

  while (stack.length > 0) {
    const [item, depth] = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map((el) => [el, depth - 1]));
    } else {
      flatArray.push(item);
    }
  }

  return flatArray.reverse();
}
