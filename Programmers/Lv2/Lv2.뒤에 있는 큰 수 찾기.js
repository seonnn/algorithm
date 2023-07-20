function solution(numbers) {
  var answer = Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }

    stack.push(i);
  }

  return answer;
}

// function solution(numbers) {
//     var answer = [];
//     let arr = []
//     let curMax = 0

//     for(let i = numbers.length - 1; i >= 0; i--) {
//         if(!arr.length) {
//             answer.push(-1)
//             curMax = numbers[i]
//             arr.push(numbers[i])
//             continue
//         }

//         if(numbers[i] >= curMax) {
//             answer.push(-1)
//             curMax = numbers[i]
//             arr.push(numbers[i])
//             continue
//         }

//         for(let j = arr.length - 1; j >= 0; j--) {
//             if(arr[j] > numbers[i]) {
//                 answer.push(arr[j])
//                 break
//             }

//             if(j === 0) answer.push(-1)
//         }
//         arr.push(numbers[i])
//     }

//     return answer.reverse();
// }
