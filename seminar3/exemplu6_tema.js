function sortByKey(arr, key) {
  return arr.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}
const persoane = [
  { nume: "Ana", varsta: 23 },
  { nume: "Dan", varsta: 21 },
  { nume: "Ioana", varsta: 25 },
];

console.log("Sortat după 'varsta':");
console.log(sortByKey(persoane, "varsta"));

console.log("Sortat după 'nume':");
console.log(sortByKey(persoane, "nume"));
