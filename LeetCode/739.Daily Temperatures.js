var dailyTemperatures = function (temperatures) {
  let result = [];
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        result.push(j - i);
        break;
      }

      if (j === temperatures.length - 1) result.push(0);
    }
  }

  return [...result, 0];
};
