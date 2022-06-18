/*Given variable string contains of all alphabet from A to Z
”ABCDEFGHIJKLMNOPQRSTUVWXYZ”

Build a function that receive two paramters: first letter and last letter.
That will do to find middle letter between of the specified letter.
Example: 

- The middle between Q and U is **S**
- The middle between R and U is **ST**
- The middle between T and Z is **W**
- The middle between Q and Z is **UV**
 */

const findMiddleAlphabet = (firstLetter, lastLetter) => {
  return (lastLetter.charCodeAt() - firstLetter.charCodeAt()) % 2 == 0
    ? String.fromCharCode(
        (lastLetter.charCodeAt() + firstLetter.charCodeAt()) / 2
      )
    : String.fromCharCode(
        (lastLetter.charCodeAt() + firstLetter.charCodeAt()) / 2
      ) +
        String.fromCharCode(
          (lastLetter.charCodeAt() + firstLetter.charCodeAt()) / 2 + 1
        );
};

console.log(findMiddleAlphabet("Q", "U")); //S
console.log(findMiddleAlphabet("R", "U")); //ST
console.log(findMiddleAlphabet("T", "Z")); //W
console.log(findMiddleAlphabet("Q", "Z")); //UV
