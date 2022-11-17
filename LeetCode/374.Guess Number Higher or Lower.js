var guessNumber = function (n) {
  let ans = guess(n);
  while (ans !== 0) {
    if (ans === -1) n--;
    else if (ans === 1) n++;

    ans = guess(n);
  }

  return n;
};

// 이진 탐색
var guessNumber = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let res = guess(middle);

    if (res === 0) return middle;

    if (res === -1) end = middle - 1;
    else if (res === 1) start = middle + 1;
  }
};
