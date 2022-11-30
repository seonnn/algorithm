var uniqueOccurrences = function (arr) {
  let map = new Map();
  let set = new Set();

  for (i in arr) {
    if (map.get(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }

  for (let [, value] of map) {
    set.add(value);
  }

  return map.size === set.size;
};
