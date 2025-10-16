const getLetterFrequencies = (text) => {
  const result = {};
  const letters = text.replace(/\s/g, "").split("");
  const totalLetters = letters.length;

  for (let letter of letters) {
    if (letter in result) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  for (let letter in result) {
    result[letter] /= totalLetters;
  }

  return result;
};

const sampleString = "the quick brown fox jumps over the lazy dog";

console.log(getLetterFrequencies(sampleString));
