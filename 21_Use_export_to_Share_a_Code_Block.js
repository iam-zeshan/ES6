/*
We can use one JavaScript file into another Javascript very easily by exporting it's function/variables and then importing these in that file where, these would be using.

There are two ways that, we can export our functions or variables:
No 1.
export const add = (x, y) => {
  return x + y;
}

No 2.
const add = (x, y) => {
  return x + y;
}

export { add };

Task:
There are two string-related functions in the editor. Export both of them using the method of your choice.
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
*/

const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  export {lowercaseString, uppercaseString};