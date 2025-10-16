const fibonacci = (n) => {
  if (n <= 0) return null; 
  if (n === 1) return 0;
  if (n === 2) return 1;

  let a = 0,
    b = 1,
    fib;

  for (let i = 3; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return b;
};

if (process.argv.length <= 2) {
  console.log(
    "Not enough parameters"
  );
} else {
  const n = parseInt(process.argv[2]);
  if (isNaN(n) || n <= 0) {
    console.log("Please provide a positive integer as argument.");
  } else {
    console.log(`Fibonacci element #${n} is:`, fibonacci(n));
  }
}
