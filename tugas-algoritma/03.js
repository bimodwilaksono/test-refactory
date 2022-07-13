/* Ganjil atau Genap?

Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.
Contoh:

Input: 43
Output: Ganjil

Input: 1032
Output: Genap
 */

const oddOrEven = (num) => (num % 2 == 0 ? "Genap" : "Ganjil");

console.log(oddOrEven(7));
console.log(oddOrEven(8));
