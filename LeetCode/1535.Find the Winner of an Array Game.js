var getWinner = function (arr, k) {
  let cnt = 0;
  let p1 = 0;
  let p2 = 1;

  while (cnt < k) {
    if (arr[p1] < arr[p2]) {
      arr.push(arr[p1]);
      cnt = 1;
      p1 = p2;
      p2++;
    } else {
      cnt++;
      p2++;
    }

    if (cnt === k) break;
  }

  return arr[p1];
};
