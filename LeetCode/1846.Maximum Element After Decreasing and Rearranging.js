var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);

  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[i] === 1) {
        set.add(arr[i]);
        continue;
      } else {
        arr[i] = 1;
        set.add(arr[i]);
        continue;
      }
    }

    if (set.has(arr[i])) continue;

    if (set.has(arr[i] - 1)) {
      set.add(arr[i]);
      continue;
    }

    set.add(set.size + 1);
    arr[i] = set.size + 1;
  }

  return set.size;
};
