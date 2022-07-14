/* 50 Bilangan Ganjil

Buatlah script untuk mencetak bilangan ganjil antara 1 hingga 100. */

function odd() {
  let i = 1;
  while (i <= 100) {
    if (i % 2 == 1) {
      console.log(i);
    }
    i++;
  }
}

odd();
