/*Alternate each case of each of string given 

alternateCase("abc")            => "ABC"
alternateCase("ABC")            => "abc"
alternateCase("Hello World")    => "hELLO wORLD" 
*/

const alternateCase = (str) =>
  str.replace(/./g, (a) =>
    a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase()
  );

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));
