function solution(orders, course) {
  var answer = [];
  let obj = {};

  for (let i = 0; i < course.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      if (orders[j].length < course[i]) continue;
      let combinations = getCombinations(orders[j].split("").sort(), course[i]);
      combinations.forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
    }
  }

  let maxOrder = Array(11).fill(0);

  for (const [key] of Object.entries(obj)) {
    if (maxOrder[key.length] < obj[key]) maxOrder[key.length] = obj[key];
  }

  for (const [key] of Object.entries(obj)) {
    if (maxOrder[key.length] > 1 && maxOrder[key.length] === obj[key]) answer.push(key);
  }

  return answer.sort();
}

function getCombinations(arr, num) {
  const results = [];

  if (num === 1) return arr.map((s) => [s]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map((s) => [fixed, ...s].join(""));

    results.push(...attached);
  });

  return results;
}
