function solution(dartResult) {
  var answer = 0;
  let nums = [];
  let options = [];
  let num = "";

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
      if (dartResult[i] === "S") nums.push(Number(num));
      else if (dartResult[i] === "D") nums.push(Number(num) ** 2);
      else if (dartResult[i] === "T") nums.push(Number(num) ** 3);

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
