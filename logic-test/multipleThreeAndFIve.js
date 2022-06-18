/*Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 
*/

const multipleThreeAndFive = (num) => {
  let sum = 0;
  let i = 1;
  while (i < num) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
};

console.log(multipleThreeAndFive(10));
console.log(multipleThreeAndFive(20));
