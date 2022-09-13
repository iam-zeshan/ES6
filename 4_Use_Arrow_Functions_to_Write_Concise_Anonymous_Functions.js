/*
We can use 'Arrow Function', to concise our code and we often use this when we need a function in a way that has to be used only one time so in that scenerio we use this type of function.

Task:
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

var magic = function() {
  return new Date();
};
*/

const magic = ()=> {
    return new Date();
  };