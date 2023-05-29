function factorial(x) {
    return new Promise((resolve, reject) => {
      if (x < 0) {
        reject(new Error("Number must be non-negative."));
      } 
      else if (x === 0) {
        
        resolve(1);
      } else {
        let result = 1;
        let counter = x;
  
        const intervalId = setInterval(() => {
             result *= counter;
          counter--;
  
          if (counter === 0) {
           clearInterval(intervalId);
                resolve(result);
          }
        }, 1000);
      }
    });
  }
  
  function permutation(n, r) {
    return Promise.all([factorial(n), factorial(n - r)])
      .then(([factN, factNR]) => {
        const result = factN / factNR;
        return result;
      })
      .catch((error) => {
        throw new Error(`error calculating permutation: ${error.message}`);
      });
  }
  
  permutation(5, 2)
    .then((result) => {
      console.log(`permutation: ${result}`);
    })
    .catch((error) => {
      console.error(error.message);
    });
  