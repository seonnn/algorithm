var totalMoney = function (n) {
  let total = 0;

  for (let i = 0; i < Math.floor(n / 7); i++) {
    total += 7 * (4 + i);
  }

  for (let i = 1; i <= n % 7; i++) {
    total = total + Math.floor(n / 7) + i;
  }

  return total;
};
