var uniqueOccurrences = function (arr) {
  let map = new Map();
  let set = [];

  for (i in arr) {
    if (map.get(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }

  for (let [, value] of map) {
    set.push(value);
  }

  return map.size === new Set(set).size;
};
