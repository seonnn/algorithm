function solution(array) {
  var answer = 0;
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (!map.get(array[i])) map.set(array[i], 0);
    map.set(array[i], map.get(array[i]) + 1);
  }

  let sortedMap = [...map].sort((a, b) => a[1] - b[1]);

  if (sortedMap.length === 1) return sortedMap[0][0];
  return sortedMap.at(-1)[1] === sortedMap.at(-2)[1] ? -1 : sortedMap.at(-1)[0];
}
