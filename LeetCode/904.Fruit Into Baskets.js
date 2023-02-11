var totalFruit = function (fruits) {
  if (new Set(fruits) <= 2) return fruits.length;

  let max = 0;
  let left = 0;
  let set = new Set();

  for (let i = 0; i < fruits.length; i++) {
    set.add(fruits[i]);

    if (set.size > 2) {
      max = Math.max(max, i - left);

      for (let j = i - 1; j >= 0; j--) {
        if (fruits[j] !== fruits[i - 1]) {
          left = j + 1;
          break;
        }
      }

      set.clear();
      set.add(fruits[i - 1]);
      set.add(fruits[i]);
    }

    if (i === fruits.length - 1) max = Math.max(max, i - left + 1);
  }

  return max;
};
