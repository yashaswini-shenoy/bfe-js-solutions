// Please implement your own Array.prototype.map().

// [1,2,3].myMap(num => num * 2)
// please avoid using Array.prototype.map() directly in your code.

// SOLUTION
Array.prototype.myMap = function (func, some) {
  const res = [];
  const length = this.length;
  for (let i = 0; i < length; i++) {
    console.log(this[i]);
    if (i in this) {
      res[i] = func.call(some, this[i], i, this);
    }
  }
  return res;
};
