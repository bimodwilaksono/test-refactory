/* Loop with Range

Buatlah script untuk mencetak dengan rentang angka tertentu.
Contoh

Input pertama: 4
Input kedua: 8
Output di browser: 4, 5, 6, 7, 8
 */

const rangeLoop = (a, b) => {
  let output = [];
  for (let i = a; i <= b; i++) {
    output.push(i);
  }
  return output.join();
};

console.log(rangeLoop(4, 8));
