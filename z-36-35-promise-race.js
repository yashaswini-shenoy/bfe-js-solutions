// This problem is similar to 31. implement async helper - race(), but with Promise.

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise. source: MDN

// Can you create a race() which works the same as Promise.race()?

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
      // short cut for
      //   promise.then((data)=> resolve(data)).catch((err)=>reject(err))
    });
  });
}
