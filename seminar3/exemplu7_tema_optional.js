function calculeazaMedia(arr) {
  if (arr.length === 0) return 0;

  const suma = arr.reduce((acc, val) => acc + val, 0);
  return suma / arr.length;
}
const numere = [10, 20, 30, 40];

console.log("Media este:", calculeazaMedia(numere)); // Output: 25
