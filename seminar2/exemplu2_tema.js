function countDifferentChars(str1, str2) {
  if (str1.length !== str2.length) {
    return -1;
  }

  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }

  return count;
}
console.log(countDifferentChars("abcde", "abcdf")); // 1
console.log(countDifferentChars("hello", "hxlxo")); // 2
console.log(countDifferentChars("test", "testing")); // -1
