/*
After exporting a function/variables from the JavaScript file, now we can use these at anywhare in another file by just importing that specific function or variables. Not just single method/variable but, we can import as many as we like by using comma ',' in between them.

Task:
Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.


// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
*/

import {uppercaseString, lowercaseString} from "./string_functions.js";
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");