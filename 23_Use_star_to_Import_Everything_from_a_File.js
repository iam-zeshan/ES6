/*
If we want to export all the functions and the variables and then, to use them in another file, we cna just do that very easily by importing them with use of '*' in the importing syntax and we just make an object of them.

Task:

The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.


// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

import * as stringFunctions from './string_functions.js'; 
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");