/*
We can use rest parameter in the function. If we're not sure how much parameter we'd be sending to the function then, this would help us to do that.

-> I didn't understant this.

Task:
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

*/

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }