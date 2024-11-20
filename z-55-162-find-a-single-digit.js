// Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

// const arr = [10, 2, 2 , 1, 0, 0, 10]
// findSingle(arr) // 1
// What is time & space cost of your approach ? Could you do better ?

// SOLUTION
/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  return arr.reduce((acc, curr) => (acc ^= curr), 0);
}
