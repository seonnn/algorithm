var guessNumber = function (n) {
  let ans = guess(n);
  while (ans !== 0) {
    if (ans === -1) n--;
    else if (ans === 1) n++;

    ans = guess(n);
  }

  return n;
};
