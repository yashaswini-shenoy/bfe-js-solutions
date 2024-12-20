// For a web application, fetching API data is a common task.

// But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.

// One approach to handle this is auto retry when network error occurs.

// You are asked to create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.

// For the problem here, there is no need to detect network error, you can just retry on all promise rejections.

// SOLUTION
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  // Method 1 using async await
  async function retry() {
    try {
      let res = await fetcher();
      return res;
    } catch (error) {
      maximumRetryCount--;
      if (maximumRetryCount >= 0) return retry();
      else throw error;
    }
  }

  return retry();

  // Method 2 using promise.then
  // return new Promise((resolve, reject) => {
  //   const hey = () =>
  //   {
  //     fetcher()
  //     .then((data)=>{
  //       resolve(data)
  //     })
  //     .catch((error) => {
  //       maximumRetryCount--;
  //       if(maximumRetryCount >= 0)
  //         hey();
  //       else reject(error);
  //     })
  //   }
  //   hey();
  // })
}
