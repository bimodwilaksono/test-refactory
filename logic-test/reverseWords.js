/*Create a function that receive input and will give output:

Reverse each word of these: 
"I am A Great human"
into
"I ma A Taerg namuh"

note: observe the Capital word behavior. Capital only when in the first letter
*/
// function reverseWords(str) {
//   let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//   return reverseWordArr.join(" ");
// }

const reverseWords = (str) => {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ")
    .replace(/[a-z]+[A-Z]/g, (c) =>
      c[c.length - 1] === c[c.length - 1].toUpperCase() &&
      c[0] === c[0].toLowerCase()
        ? c[0].toUpperCase() +
          c.slice(1, c.length - 1) +
          c[c.length - 1].toLowerCase()
        : c
    );
};

console.log(reverseWords("I am A Great human"));
