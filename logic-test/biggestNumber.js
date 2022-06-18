/*Description:
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.


Return null if the argument is invalid. */

const biggestNum = (num) =>
  num >= 100 && num < 1000
    ? console.log(("" + num).split("").sort().reverse().join("") * 1)
    : console.log(null);

biggestNum(374);
biggestNum(37);
biggestNum(490);
biggestNum(-1);
