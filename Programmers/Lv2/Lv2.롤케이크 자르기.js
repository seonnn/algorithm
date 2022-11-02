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
