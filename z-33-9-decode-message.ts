// Your are given a 2-D array of characters. There is a hidden message in it.

// I B C A L K A
// D R F C A E A
// G H O E L A D
// The way to collect the message is as follows

// start at top left
// move diagonally down right
// when cannot move any more, try to switch to diagonally up right
// when cannot move any more, try switch to diagonally down right, repeat 3
// stop when cannot neither move down right or up right. the character on the path is the message
// for the input above, IROCLED should be returned.

// notes

// if no characters could be collected, return empty string

// This is a JavaScript coding problem from BFE.dev

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  let i = 0,
    j = 0,
    col = message[0]?.length,
    res = "",
    step = 1;

  while (j < col) {
    res += message[i][j];
    if (!message[i + step]) step *= -1;
    i += step;
    j++;
  }

  return res;
}
