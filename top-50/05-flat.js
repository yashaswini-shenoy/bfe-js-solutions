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
  return depth
    ? arr.reduce((acc, curr) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ];
      }, [])
    : arr;
}
