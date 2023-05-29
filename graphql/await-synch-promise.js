// Factorial function returning a Promise with a delay
function factorial(x) {
    return new Promise((resolve, reject) => {
      if (x < 0) {
        reject(new Error("Number must be non-negative."));
      } else if (x === 0) {
        resolve(1);
      } else {
        let result = 1;
        let counter = x;
  
        const intervalId = setInterval(() => {
          result *= counter;
          counter--;
  
          if (counter === 0) {
            clearInterval(intervalId);
            console.log(`Factorial(${x}) calculated: ${result}`);
            resolve(result);
          }
        }, 1000);
      }
    });
  }
  
  // Permutation function using the factorial function
  async function permutation(n, r) {
    try {
      const factN = await factorial(n);
      console.log(`Factorial(${n}) completed: ${factN}`);
  
      const factNR = await factorial(n - r);
      console.log(`Factorial(${n - r}) completed: ${factNR}`);
  
      const result = factN / factNR;
      return result;
    } catch (error) {
      throw new Error(`Error calculating permutation: ${error.message}`);
    }
  }
  
  // Example usage
  (async () => {
    try {
      console.log("Calculating permutation...");
      const result = await permutation(5, 2);
      console.log(`Permutation result: ${result}`);
    } catch (error) {
      console.error(error.message);
    }
  })();
  