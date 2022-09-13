/*
'Default parameter', it is also an ES6 function feature that, work as a default value. If the fuction was called and during the calling if the parameter was missing then, we can use default paramter to overcome this problem and the default parameter would work quite good.

Task:
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
*/

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line