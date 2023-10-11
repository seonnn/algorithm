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

  start = mid <= 0 ? 0 : mid - 1;
  end = mid >= nums.length - 1 ? nums.length - 1 : mid + 1;

  let checkStart = false;
  let checkEnd = false;

  while (checkStart === false || checkEnd === false) {
    if (start === 0) {
      if (nums[start] !== target) {
        if (nums[start + 1] === target) start += 1;
        else start = -1;
      }
      checkStart = true;
    }

    if (end === nums.length - 1 && nums[end] === target) {
      if (nums[end] !== target) {
        if (nums[end - 1] === target) end -= 1;
        else end = -1;
      }
      checkEnd = true;
    }

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

  if (start === -1 || end === -1) {
    if (start > end) end = start;
    else start = end;
  }

  return [start, end];
};

// 코드 개선
var searchRange = function (nums, target) {
  let start = -1,
    end = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, end];
};
