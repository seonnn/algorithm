let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function fibonacciR(num) {
  let count = 0;

  function helper(n) {
    if (n <= 2) {
      count++;
      return 1;
    }

    return helper(n - 1) + helper(n - 2);
  }

  helper(num);

  return count;
}

function fibonacciD(num) {
  let count = 0;
  let fibo = [0, 1, 1];

  function helper(n) {
    if (!fibo[n]) {
      count++;
      fibo[n] = helper(n - 1) + helper(n - 2);
    }

    return fibo[n];
  }

  helper(num);

  return count;
}

console.log([fibonacciR(input), fibonacciD(input)].join(" "));
