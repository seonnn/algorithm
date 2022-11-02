// 시간초과
function solution(topping) {
  var answer = 0;

  let toppingBackArr = [];
  while (topping.length > 0) {
    let lastTopping = topping.pop();
    toppingBackArr.push(lastTopping);

    let toppingFront = [...new Set(topping)];
    let toppingBack = [...new Set(toppingBackArr)];
    if (toppingFront.length === toppingBack.length) answer++;
    else if (toppingFront.length < toppingBack.length) break;
  }

  return answer;
}

// 해결
function solution(topping) {
  var answer = 0;

  let map = new Map();
  for (i in topping) {
    if (map.get(topping[i])) map.set(topping[i], map.get(topping[i]) + 1);
    else map.set(topping[i], 1);
  }

  let set = new Set();
  for (i in topping) {
    set.add(topping[i]);

    if (map.get(topping[i]) > 1) map.set(topping[i], map.get(topping[i]) - 1);
    else map.delete(topping[i]);

    if (map.size === set.size) answer++;
  }

  return answer;
}
