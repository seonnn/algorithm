var kthGrammar = function (n, k) {
  let length = Math.pow(2, n - 1);
  let reversed = false;

  while (n > 1) {
    if (k > length / 2) {
      reversed = !reversed;
      k -= length / 2;
    }

    length /= 2;
    n--;
  }

  if (reversed) return k === 1 ? 1 : 0;
  else return k === 1 ? 0 : 1;
};

// 재귀
var kthGrammar = function (n, k) {
  if (n === 1) return 0;

  const mid = Math.pow(2, n - 1) / 2;

  if (k <= mid) return kthGrammar(n - 1, k);
  else return 1 - kthGrammar(n - 1, k - mid);
};
