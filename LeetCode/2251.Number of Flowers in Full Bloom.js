var fullBloomFlowers = function (flowers, people) {
  let fullBloom = {};

  for (let i = 0; i < flowers.length; i++) {
    for (let j = flowers[i][0]; j <= flowers[i][1]; j++) {
      fullBloom[j] = fullBloom[j] ? fullBloom[j] + 1 : 1;
    }
  }

  let result = Array(people.length).fill(0);

  for (let i = 0; i < people.length; i++) {
    result[i] = fullBloom[people[i]] || 0;
  }

  return result;
};
