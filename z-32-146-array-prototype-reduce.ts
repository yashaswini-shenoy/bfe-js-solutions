// Array.prototype.reduce() is a handy method to process arrays.

// Here is a simple task - Could you implement it by yourself?

// [1,2,3].myReduce((sum, item) => sum + item)
// // 6
// do not use native Array.prototype.reduce() in your code
// your function is only tested against valid array (no array-like objects)

// copied from lib.es5.d.ts
declare interface Array<T> {
  myReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  myReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T;
  myReduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;
}

// ACTUAL SOLUTION
Array.prototype.myReduce = function (...args: any[]) {
  // if args length is less than 1, that means the arguments doesn't contain initial value
  const hasInitialValue = args.length > 1;
  // If initial value is also not there, and the length of the array is also 0, then throw an error
  if (!hasInitialValue && this.length === 0) {
    throw new Error();
  }
  // If no initial value, the first element needs to be taken, else the initial value to be taken
  let result = hasInitialValue ? args[1] : this[0];

  // If no initial value (i.e first value of the array is already considered), then iterate from 2nd element
  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }
  return result;
};
