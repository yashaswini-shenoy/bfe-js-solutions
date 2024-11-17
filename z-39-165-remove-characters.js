// Given a string contaning only a, b and c, remove all b and ac.

// removeChars('ab') // 'a'
// removeChars('abc') // ''
// removeChars('cabbaabcca') // 'caa'
// What is the time and space complexity of your approach?

// SOLUTION
/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  let aCount = 0,
    cCount = 0,
    res = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      aCount++;
    } else if (input[i] === "c") {
      if (aCount > 0) aCount--;
      else cCount++;
    }
  }

  while (cCount--) {
    res = res.concat("c");
  }
  while (aCount--) {
    res = res.concat("a");
  }

  return res;
}
