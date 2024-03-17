var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  const length = Math.max(nums1.length, nums2.length);
  const res = new Set();

  for (let i = 0; i < length; i++) {
    if (typeof nums1[i] === "number" && set2.has(nums1[i])) res.add(nums1[i]);
    if (typeof nums2[i] === "number" && set1.has(nums2[i])) res.add(nums2[i]);
  }

  return [...res];
};
