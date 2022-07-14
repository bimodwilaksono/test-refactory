/* Add to Array

Buatlah script untuk menambahkan kata "Handuk" ke awal array, dan "Celana" ke akhir array.

const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'] */

const stuff = ["Meja", "Buku", "Topi", "Baju", "Kayu"];

const addToArray = (arr, initial, final) => {
  arr.unshift(initial);
  arr.push(final);
  return arr;
};

console.log(addToArray(stuff, "Handuk", "Celana"));
