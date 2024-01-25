var asteroidCollision = function (asteroids) {
  const stack = [];

  stack.push(asteroids[0]);

  for (let i = 1; i < asteroids.length; i++) {
    if (
      !stack.length ||
      (stack.at(-1) < 0 && asteroids[i] < 0) ||
      (stack.at(-1) > 0 && asteroids[i] > 0) ||
      (stack.at(-1) < 0 && asteroids[i] > 0)
    ) {
      stack.push(asteroids[i]);
      continue;
    }

    while (stack.at(-1) > 0 && asteroids[i] < 0) {
      if (stack.at(-1) > Math.abs(asteroids[i])) break;
      else if (stack.at(-1) === Math.abs(asteroids[i])) {
        stack.pop();
        break;
      } else {
        stack.pop();
        if (!stack.length || (stack.at(-1) < 0 && asteroids[i] < 0)) stack.push(asteroids[i]);
      }
    }
  }

  return stack;
};
