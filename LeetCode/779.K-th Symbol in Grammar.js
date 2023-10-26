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
