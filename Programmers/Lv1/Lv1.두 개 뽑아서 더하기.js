function solution(numbers) {
  var answer = [];
  let arr = Array(200).fill(false);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr[numbers[i] + numbers[j]] = true;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) answer.push(i);
  }

  return answer;
}
