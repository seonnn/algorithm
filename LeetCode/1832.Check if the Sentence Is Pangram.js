var checkIfPangram = function (sentence) {
  let removeDuplicate = new Set(sentence);
  let sentenceArr = [...removeDuplicate];

  return sentenceArr.length === 26 ? true : false;
};
