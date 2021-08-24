// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

///improving performance with memoization
function memoize(fn){

  //data store - cache object
  const cache = {};
//anonymous function with an undefined no of args
  return function(...args){
    if(cache[args]){
      return cache[args];
    }
    //storing the results of calling slowFib with a number that has not been called before
    const result = fn.apply(this, args);
    cache[args] = result;
    return result; 
  };
}

//slowFib can be called fib as this not change the result
function slowFib(n) {
  //using recursion
  if(n < 2){
    return n;
  }
  //this is not a reference to initial fib function but a reference to the memoized fn
  return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib);

module.exports = fib;

//linear runtime
// function fib(n) {
//   let array = [0, 1];
//   for(let i = 2; i<= n; i++){
//     const a = result[result.length-1] // or result[i-1]
//     const b = result[i -2 ]
//     result.push(a+b)
//   }
//   return result[n]; // result[length -1]

// }

