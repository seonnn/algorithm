var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  if (nums[start] !== nums[start + 1]) return nums[start];
  if (nums[end] !== nums[end - 1]) return nums[end];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    if (
      (nums[mid] === nums[mid - 1] && mid % 2 === 1) ||
      (nums[mid] !== nums[mid - 1] && mid % 2 !== 1)
    )
      start = mid + 1;
    else end = mid - 1;
  }
};
