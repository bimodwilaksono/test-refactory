/* Grade

Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

    -Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah A.
    -Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah B.
    -Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah C.
    -Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah D.
    -Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah E.

Contoh:

Input: 30
Output: E

Input: 75
Output: C
 */

const gradeIndex = (grade) =>
  grade >= 90
    ? "A"
    : grade >= 80 && grade < 90
    ? "B"
    : grade >= 70 && grade < 80
    ? "C"
    : grade >= 60 && grade < 70
    ? "D"
    : "E";
console.log(gradeIndex(90)); // A
console.log(gradeIndex(85)); // B
console.log(gradeIndex(76)); // C
console.log(gradeIndex(66)); // D
console.log(gradeIndex(55)); // E
