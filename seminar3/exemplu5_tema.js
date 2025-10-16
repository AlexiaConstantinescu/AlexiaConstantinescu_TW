const cenzureaza = (text, dictionary) => {
  const words = text.split(' ');

  const result = words.map(word => {
    if (dictionary.includes(word)) {
      if (word.length <= 2) return word;  
      const middle = '*'.repeat(word.length - 2);
      return word[0] + middle + word[word.length - 1];
    } else {
      return word;
    }
  });

  return result.join(' ');
};


const text = "javascript este minunat";
const dict = ["este"];

console.log(cenzureaza(text, dict));

