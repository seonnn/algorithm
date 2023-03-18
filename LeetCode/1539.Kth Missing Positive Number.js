var findKthPositive = function (arr, k) {
  let newArr = arr.at(-1) - arr.length > k ? Array(arr.at(-1)).fill() : Array(arr.at(-1) + k).fill();

  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i] - 1] = arr[i];
  }

  for (let i = 0; i < newArr.length; i++) {
    if (!newArr[i]) k--;

    if (k === 0) return i + 1;
  }
};
