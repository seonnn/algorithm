var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) break;

    if (nums[mid] > target) {
      end = mid - 1;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    }
  }

  if (nums[mid] !== target && start > end) return [-1, -1];

  start = mid - 1;
  end = mid + 1;

  let checkStart = false;
  let checkEnd = false;

  while (checkStart === false || checkEnd === false) {
    if (nums[start] < target) {
      start++;
      checkStart = true;
    }

    if (nums[end] > target) {
      end--;
      checkEnd = true;
    }

    if (!checkStart) start--;
    if (!checkEnd) end++;
  }

  return [start, end];
};
