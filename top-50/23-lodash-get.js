// _.get(object, path, [defaultValue]) is a handy method to help retrieving data from an arbitrary object. if the resolved value from path is undefined, defaultValue is returned.

// Please create your own get().

// const obj = {
//   a: {
//     b: {
//       c: [1,2,3]
//     }
//   }
// }
// get(obj, 'a.b.c') // [1,2,3]
// get(obj, 'a.b.c.0') // 1
// get(obj, 'a.b.c[1]') // 2
// get(obj, ['a', 'b', 'c', '2']) // 3
// get(obj, 'a.b.c[3]') // undefined
// get(obj, 'a.c', 'bfe') // 'bfe'

// SOLUTION
/**
 * @param { object } source
 * @param { string | string[] } path
 * @param { any? } defaultValue
 * @returns { any }
 */
function get(source, path, defaultValue = undefined) {
  // 1. normalize the path into array notation
  // 2. get the result layer by layer
  const segs = Array.isArray(path) ? path : path.split(/[\.\[\]]+/g);

  if (segs[segs.length - 1] === "") {
    segs.pop();
  }

  // Remember the case where the path is empty, we need to send the default value.
  if (segs.length === 0) {
    return defaultValue;
  }

  let result = source;

  while (result && segs.length > 0) {
    let head = segs.shift();
    result = result[head];
  }

  return result === undefined ? defaultValue : result;
}
