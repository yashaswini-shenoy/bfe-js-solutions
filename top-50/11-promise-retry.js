// For a web application, fetching API data is a common task.

// But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.

// One approach to handle this is auto retry when network error occurs.

// You are asked to create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.

// For the problem here, there is no need to detect network error, you can just retry on all promise rejections.

// SOLUTION
/**
 * @param { () => Promise<any> } fetcher
 * @param { number } maximumRetryCount
 * @returns { Promise<any> }
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    let retryCount = 0;
    const callFetcher = () =>
      fetcher().then(
        (data) => {
          resolve(data);
        },
        (error) => {
          if (retryCount < maximumRetryCount) {
            callFetcher();
            retryCount += 1;
          } else {
            reject(error);
          }
        }
      );

    callFetcher();
  });
}