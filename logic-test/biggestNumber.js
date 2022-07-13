/*Description:
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.


Return null if the argument is invalid. */

// const biggestNum = (num) =>
//   num >= 100 && num < 1000
//     ? console.log(("" + num).split("").sort().reverse().join("") * 1)
//     : console.log(null);

    const biggestNum = (num) =>
    num >= 100 && num < 1000
      ? ("" + num).split("").sort().reverse().join("") * 1
      : null;

console.log(biggestNum(374));
console.log(biggestNum(37));
console.log(biggestNum(490));
console.log(biggestNum(-1));
