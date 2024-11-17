// Given an array of integers, move zeros to the end while keeping the order of the rest.

// You should make the in-place change.

// const list = [1,0,0,2,3]
// moveZeros(list)
// console.log(list) // [1,2,3,0,0]
// What is the time & space complexity of your approach?

// SOLUTION
/**
 * @param {Array<any>} list
 * @returns {void}
 */
function swap(list, i, j) {
  [list[i], list[j]] = [list[j], list[i]];
}

function moveZeros(list) {
  let j = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      swap(list, i, j);
      j++;
    }
  }
}

// OR
function moveZeros(list) {
  let index = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      [list[index++], list[i]] = [list[i], list[index]];
    }
  }
}
