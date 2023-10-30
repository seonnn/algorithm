var sortByBits = function (arr) {
  arr = arr
    .map((num) => [num, num.toString(2)])
    .map((arr) => {
      const [n, b] = arr;
      let bLength = b.split("").filter((s) => s === "1").length;

      return [n, bLength];
    });

  arr.sort((a, b) => a[1] - b[1] || (a[1] === b[1] && a[0] - b[0]));

  return arr.map((arr) => arr[0]);
};
