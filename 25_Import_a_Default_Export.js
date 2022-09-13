/*
When we want to import that default function/variable fromt the file at which it is already exported as default then, at the time of import we'll use a slightly different syntax.

Task:
In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.

// Only change code above this line

subtract(7,4);
*/

import subtract from './math_functions.js';
// Only change code above this line

subtract(7,4);
