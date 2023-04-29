var lastStoneWeight = function (stones) {
  while (stones.length >= 2) {
    stones.sort((a, b) => a - b);

    let y = stones.pop();
    let x = stones.pop();

    if (y - x > 0) stones.push(y - x);
  }

  return stones[0] || 0;
};
