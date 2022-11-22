function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  // cacheSize가 0인 경우 모든 값이 cache miss로 간주되어 cities의 length * 5초로 계산하여 return
  if (cacheSize === 0) return cities.length * 5;

  // cacheSize가 1 이상인 경우
  for (el in cities) {
    let lowerEl = cities[el].toLowerCase();
    let idx = cache.indexOf(lowerEl);

    // cache 배열에 요소가 없을 때
    if (idx === -1) {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
    } else {
      // cache 배열에 요소가 있을 때

      // cache 배열에 존재했던 요소를 가장 최근 요소로 순서 update
      cache.splice(idx, 1);
      answer += 1;
    }
    cache.push(lowerEl);
  }

  return answer;
}
