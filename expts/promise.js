(async function () {
  //   const promise = new Promise((resolve, reject) => {
  //     console.log("start");
  //     setTimeout(() => resolve("Data"), 12000);
  //   });
  //   console.log(promise);
  //   console.log(await promise);
  //   const promise2 = new Promise((resolve, reject) => {
  //     console.log("start");
  //     setTimeout(() => resolve("Data"), 10000);
  //   });

  //   console.log(await promise2);
  //   console.log(promise);

  //   const promise3 = new Promise((resolve, reject) => {
  //     console.log("hey1");
  //     setTimeout(() => resolve("data"), 2000);
  //   });
  //   const logData = promise3.then((data) => {
  //     console.log(data);
  //     return new Promise((resolve, reject) => {
  //       console.log("hey2");
  //       setTimeout(() => {
  //         resolve(data);
  //       }, 2000);
  //     });
  //   });
  //   logData
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     })
  //     .catch((error) => console.log(error));
  //   console.log(logData);

  setTimeout(() => console.log("Second"));
  console.log("Zeroth");

  const promise = new Promise((resolve, reject) => {
    console.log("First");

    setTimeout(() => {
      console.log("Second and halfth");
      resolve(
        new Promise((resolve1) => {
          console.log("Third");
          setTimeout(() => {
            resolve1(
              new Promise((resolve1) => {
                console.log("Fourth");
                setTimeout(() => {
                  resolve1(42, console.log("Fifth"));
                }, 3000);
              })
            );
          }, 3000);
        })
      );
    }, 2000);
  });

  console.log("First and halfth");
  promise
    .then((data) => {
      console.log("Sixth", data);
      return new Promise((resolve) => {
        console.log("Seventh", data);

        setTimeout(() => {
          resolve(data);
        }, 3000);
      });
    })
    .then((data) => console.log("Eighth", data));

  //   promise;
  // .then(
  //   (data) => console.log(data)
  //   // this is also valid way of handling promise rejections
  //   // (error) => console.log(error)
  // )
  // // Or you can use .catch to handle the error
  // .catch(() => {
  //   console.log("here");
  // });
})();
