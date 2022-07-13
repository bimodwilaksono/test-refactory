/* Kabisat

Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.
Contoh:

Input: 1900
Output: Bukan kabisat

Input: 2000
Output: Kabisat

Input: 2001
Output: Bukan kabisat

Input: 2016
Output: Kabisat
 */

const isKabisat = (year) => (year % 4 == 0 ? "Kabisat" : "Bukan Kabisat");

console.log(isKabisat(1900));
console.log(isKabisat(2000));
console.log(isKabisat(2001));
console.log(isKabisat(2016));
