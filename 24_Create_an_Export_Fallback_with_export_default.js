/*
If we want to use only one value (function) out of a file then we can use 'export default', but we can't use this for 'var, let, and const'.

Task:
The following function should be the fallback value for the module. Please add the necessary code to do so.

function subtract(x, y) {
  return x - y;
}
*/

export default function subtract(x, y) {
    return x - y;
  }