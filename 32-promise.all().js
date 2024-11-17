// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

// source - MDN

// Could you write your own all() ? which should works the same as Promise.all()

// note

// Do not use Promise.all() directly, it is not helping

// SOLUTION
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  const _promises = promises.map((item) =>
    item instanceof Promise ? item : Promise.resolve(item)
  );

  // resolve if empty
  if (_promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const res = [];
    let notRejected = true;
    let fulfilled = 0;
    _promises.forEach((promise, i) => {
      promise.then(
        (data) => {
          if (!notRejected) return;
          fulfilled += 1;
          res[i] = data;
          if (fulfilled === promises.length) {
            resolve(res);
          }
        },
        (err) => {
          if (!notRejected) return;
          notRejected = false;
          reject(err);
        }
      );
    });
  });
}
