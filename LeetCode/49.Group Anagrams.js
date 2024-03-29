// 풀이1
var groupAnagrams = function (strs) {
  let newStrs = strs.map((el) => el.split("").sort().join(""));
  let newStrsSet = [...new Set(newStrs)];
  let result = [];

  for (let i = 0; i < newStrsSet.length; i++) {
    result.push([]);
    for (let j = 0; j < strs.length; j++) {
      if (newStrsSet[i] === newStrs[j]) result[i].push(strs[j]);
    }
  }

  result.sort((a, b) => a.length - b.length);

  return result;
};

// 풀이2
var groupAnagrams = function (strs) {
  let newStrsMap = new Map();

  for (let str of strs) {
    let key = str.split("").sort().join("");

    if (newStrsMap.has(key)) newStrsMap.set(key, [...newStrsMap.get(key), str]);
    else newStrsMap.set(key, [str]);
  }

  return [...newStrsMap.values()];
};
