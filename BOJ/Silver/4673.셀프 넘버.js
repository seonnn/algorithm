let notSelfNumArr = [];
let selfNumArr = [];

for (let i = 1; i <= 10000; i++) {
  selfNumArr.push(i);
}

for (let i = 1; i <= 10000; i++) {
  let notSelfNum = i;
  for (let j = 0; j < String(i).length; j++) {
    notSelfNum += Number(String(i)[j]);
  }
  if (notSelfNum <= 10000 && notSelfNumArr.includes(notSelfNum) === false) {
    notSelfNumArr.push(notSelfNum);
  } else {
    continue;
  }
}

selfNumArr = selfNumArr.filter(
  (selfNum) => notSelfNumArr.includes(selfNum) === false
);

for (let i = 0; i < selfNumArr.length; i++) {
  console.log(selfNumArr[i]);
}
