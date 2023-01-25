function solution(dartResult) {
  var answer = 0;
  let nums = [];
  let options = [];
  let num = "";
  let operators = {
    S: 1,
    D: 2,
    T: 3,
  };

  for (let i = 0; i < dartResult.length; i++) {
    let reg = /[#*]/g;
    if (reg.test(dartResult[i])) {
      options.push([i, dartResult[i]]);
      nums.push("");
      continue;
    }

    if (+dartResult[i] >= 0) {
      num += dartResult[i];
      nums.push("");
    } else {
      nums.push(Number(num) ** operators[dartResult[i]]);
      num = "";
    }
  }

  for (let i = 0; i < options.length; i++) {
    let temp = options[i];
    if (temp[1] === "#") {
      nums[temp[0] - 1] *= -1;
    } else {
      nums[temp[0] - 1] *= 2;
      if (temp[0] > 1) {
        for (let j = temp[0] - 3; j >= 1; j--) {
          if (nums[j]) {
            nums[j] *= 2;
            break;
          }
        }
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) answer += nums[i];
  }

  return answer;
}
