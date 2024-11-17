// Given a compressed string, return its original form.

// For example.

// uncompress('3(ab)') // 'ababab'
// uncompress('3(ab2(c))') // 'abccabccabcc'
// a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
// inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.

// SOLUTION
const isNumeric = (str: string) =>
  !isNaN(parseFloat(str)) && isFinite(Number(str));

function uncompress(str: string): string {
  const stack: string[] = [];
  for (const char of str) {
    if (char !== ")") {
      stack.push(char);
    } else {
      let word = "";
      let count = "";
      while (stack.length && stack[stack.length - 1] !== "(")
        word = stack.pop() + word;
      stack.pop();
      while (stack.length && isNumeric(stack[stack.length - 1]))
        count = stack.pop() + count;
      stack.push(word.repeat(Number(count)));
    }
  }
  return stack.join("");
}
