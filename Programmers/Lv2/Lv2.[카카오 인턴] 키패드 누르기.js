function solution(numbers, hand) {
  var answer = "";
  let left = 10;
  let right = 12;

  for (let i = 0; i < numbers.length; i++) {
    let btn = numbers[i] !== 0 ? numbers[i] : 11;

    if (btn % 3 === 1) {
      left = btn;
      answer += "L";
    } else if (btn % 3 === 0 && btn !== 0) {
      right = btn;
      answer += "R";
    } else {
      let leftD = getDistance(left, btn);
      let rightD = getDistance(right, btn);

      if (leftD < rightD) {
        left = btn;
        answer += "L";
      } else if (leftD > rightD) {
        right = btn;
        answer += "R";
      } else {
        answer += hand[0].toUpperCase();
        hand === "right" ? (right = btn) : (left = btn);
      }
    }
  }

  return answer;
}

function getDistance(cur, target) {
  if (cur + 1 === target || cur - 1 === target) return 1;

  if (cur % 3 === 1) return Math.abs((cur + 1 - target) / 3) + 1;
  else if (cur % 3 === 2) return Math.abs((cur - target) / 3);
  else return Math.abs((cur - 1 - target) / 3) + 1;
}
