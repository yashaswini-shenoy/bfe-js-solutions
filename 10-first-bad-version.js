// Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.

// Versions after first bad version are supposed to be all bad versions.

// notes

// Inputs are all non-negative integers
// if none found, return -1

// SOLUTION
// This is a JavaScript coding problem from BFE.dev

/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    if (isBad(version)) {
      let possible = version;
      const binarySearch = (low, high) => {
        if (low <= high) {
          let mid = Math.floor((low + high) / 2);
          if (isBad(mid)) {
            possible = Math.min(possible, mid);
            binarySearch(low, mid - 1);
          } else {
            binarySearch(mid + 1, high);
          }
        }
      };
      binarySearch(0, version);
      return possible;
    } else return -1;
  };
}

// BETTER

/*
 type TypIsBad = (version: number) => boolean
 */
/**
 * @param {TypIsBad} isBad
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    let start = 0;
    let end = version;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (isBad(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start <= version ? start : -1;
  };
}
