// For a web application, fetching API data is a common task.

// But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.

// One approach to handle this is auto retry when network error occurs.

// You are asked to create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.

// For the problem here, there is no need to detect network error, you can just retry on all promise rejections.

//  SOLUTION
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  const promise = fetcher();
  // promise.
  // then((data) => {
  //   return data;
  // }).catch(() => {
  //   maximumRetryCount--;
  //   if(maximumRetryCount > 0)
  //     hey();
  // });
  async function hey() {
    try {
      const res = await promise;
      return res;
    } catch (err) {
      maximumRetryCount--;
      if (maximumRetryCount > 0) {
        return hey();
      } else throw new Error();
    }
  }

  return await hey();
}

// fetchWithAutoRetry(() => {return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     reject(3)
//   }, 5000)
// })}, 1);
