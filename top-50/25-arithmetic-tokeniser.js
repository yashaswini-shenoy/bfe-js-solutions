// Given a character sequence and a defined document unit, tokenization is the task of chopping it up into pieces, called tokens , perhaps at the same time throwing away certain characters, such as punctuation. (ref)

// For tasks of string processing, in many cases we are given a string, and are asked to understand this string in specific logic and then return the result.

// For example, if we are to calculate the result of following expression:

//  1 * (20 -   300      )
// before we implement the logic, first we need to get the "keywords"(tokens) and ignore the spaces, like following:

// '1','*', '(', '20', '-', '300', ')'
// Then we can process above tokens and get the result easier.

// You are asked to implement a tokenize() for arithmetic expression , which works as below:

// const tokens = tokenize(' 1 * (20 -   300      ) ')
// while (true) {
//   let token = tokens.next()
//   if (token.done) {
//     break
//   }
//   console.log(token.value)
// }
// or you can use for ... of

// for (let token of tokens) {
//     console.log(token)
// }
// Because it is trivial, in a real interview you talk to interviewer and implement tokenizer later, this could save yourself some time for more important tasks.

// Input

// input only contains valid non-negative integers with +, -, *, /, (, ) and spaces, space should be ignored.

// your method should return an Generator object.

// SOLUTION
/**
 * @param {string} str
 * @return {Generator}
 */
function* tokenize(str) {
  let buffer = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    switch (char) {
      case " ":
        continue;
      case "+":
      case "-":
      case "*":
      case "/":
      case "(":
      case ")":
        if (buffer != "") {
          yield buffer;
          buffer = "";
        }
        yield char;
        continue;
      default:
        buffer += char;
    }
  }

  if (buffer != "") {
    yield buffer;
  }
}
