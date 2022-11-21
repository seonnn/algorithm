function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  for (el in cities) {
    let lowerEl = cities[el].toLowerCase();
    let idx = cache.indexOf(lowerEl);

    if (idx === -1) {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
    } else {
      cache.splice(idx, 1);
      answer += 1;
    }
    cache.push(lowerEl);
  }

  return answer;
}
