/* Film Rating

Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

    Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
    Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
    Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
    Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.

Contoh:

Input: 15
Output: Remaja

Input: 32
Output: Dewasa
 */

const filmRating = (age) =>
  age >= 21
    ? "DEWASA"
    : age >= 13
    ? "REMAJA"
    : age >= 9
    ? "BIMBINGAN ORANG TUA"
    : "SEMUA USIA";

console.log(filmRating(21));
console.log(filmRating(13));
console.log(filmRating(10));
console.log(filmRating(5));
