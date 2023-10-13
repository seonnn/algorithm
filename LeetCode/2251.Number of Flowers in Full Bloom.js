// var fullBloomFlowers = function (flowers, people) {
//   let fullBloom = {};

//   for (let i = 0; i < flowers.length; i++) {
//     for (let j = flowers[i][0]; j <= flowers[i][1]; j++) {
//       fullBloom[j] = fullBloom[j] ? fullBloom[j] + 1 : 1;
//     }
//   }

//   let result = Array(people.length).fill(0);

//   for (let i = 0; i < people.length; i++) {
//     result[i] = fullBloom[people[i]] || 0;
//   }

//   return result;
// };

// 이진탐색 풀이
var fullBloomFlowers = function (flowers, people) {
  const changes = [];

  for (let i = 0; i < flowers.length; i++) {
    changes.push([flowers[i][0], 1]);
    changes.push([flowers[i][1] + 1, -1]);
  }

  changes.sort((a, b) => a[0] - b[0] || (a[0] === b[0] && a[1] - b[1]));

  const min = changes[0][0];
  const max = changes.at(-1)[0] - 1;

  const bloom = {};
  let flower = 0;

  for (let i = 0; i < changes.length; i++) {
    flower += changes[i][1];
    bloom[changes[i][0]] = flower;
  }

  const answer = [];
  const changeTimes = Object.keys(bloom).map((str) => +str);

  for (let i = 0; i < people.length; i++) {
    if (people[i] < min || people[i] > max) {
      answer.push(0);
      continue;
    }

    answer.push(bloom[binarySearch(changeTimes, people[i])]);
  }

  return answer;
};

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return arr[mid];
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return arr[end];
}
