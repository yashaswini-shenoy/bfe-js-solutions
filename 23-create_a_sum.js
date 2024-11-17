// Create a sum(), which makes following possible

// const sum1 = sum(1)
// sum1(2) == 3 // true
// sum1(3) == 4 // true
// sum(1)(2)(3) == 6 // true
// sum(5)(-1)(2) == 6 // true

// SOLUTION
/**
 * @param {number} num
 */
function sum(num) {
  function hey(num2) {
    return sum(num + num2);
  }

  hey.valueOf = () => num;
  return hey;
}

// With 2 nested functions
/**
 * @param {number} num
 */
function sum(num) {
  function hey(num1) {
    function hey2(num2) {
      return hey(num1 + num2);
    }
    hey2.valueOf = () => num + num1;
    return hey2;
  }

  hey.valueOf = () => num;
  return hey;
}
