const getDivisibleSum = (numbers, divisor) => {
  return numbers
    .filter((num) => num % divisor === 0)
    .reduce((sum, num) => sum + num, 0);
};

const numbers = [10, 15, 20, 25, 33, 12, 18];
const divisor = 5;

const result = getDivisibleSum(numbers, divisor);
console.log("Suma numerelor divizibile cu", divisor, "este:", result);
