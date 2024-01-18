var maxArea = function (height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let max = 0;

  while (p1 < p2) {
    let min = Math.min(height[p1], height[p2]);
    max = Math.max(max, min * (p2 - p1));

    if (height[p1] < height[p2]) p1++;
    else p2--;
  }

  return max;
};
