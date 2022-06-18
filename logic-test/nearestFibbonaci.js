/*Have the function to find nearest Fibonacci numbers, that the parameter is array.

**Example Input**:
arr = [15,1,3]
then your program expected to made **output = 2**

**Why Output is 2?**

Because by the above input example **[15,1,3]**, if we add up them it will **15+1+3 = 19**, and the nearest **fibonacci of 19 is 21**, so we need to **add 2 then it can be 21**. So, the correct answer is 2.
*/

const nearestFibbonaci = (arr) => {
  let first = 0,
    second = 1,
    next = first + second;
  let sumArray = [...arr].reduce((curr, prev) => curr + prev, 0);

  while (next < sumArray) {
    first = second;
    second = next;
    next = first + second;
  }
  return next - sumArray;
};

console.log(nearestFibbonaci([15, 10, 13]));
