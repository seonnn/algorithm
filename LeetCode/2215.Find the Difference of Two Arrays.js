// 처음 풀이
var findDifference = function (nums1, nums2) {
  let answer = Array.from({ length: 2 }, () => new Set());
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let len = nums1.length > nums2.length ? nums1.length : nums2.length;

  for (let i = 0; i < len; i++) {
    if (typeof nums1[i] === "number" && !set2.has(nums1[i])) answer[0].add(nums1[i]);
    if (typeof nums2[i] === "number" && !set1.has(nums2[i])) answer[1].add(nums2[i]);
  }

  return [[...answer[0]], [...answer[1]]];
};

var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  return [[...set1].filter((n) => !set2.has(n)), [...set2].filter((n) => !set1.has(n))];
};
