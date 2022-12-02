var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let set1 = [...new Set([...word1.split("")])].sort();
  let set2 = [...new Set([...word2.split("")])].sort();

  if (set1.length !== set2.length) return false;

  let obj1 = {};
  let obj2 = {};

  console.log(set1, set2);

  for (let i = 0; i < set1.length; i++) {
    if (set1[i] !== set2[i]) return false;

    obj1[set1[i]] = 0;
    obj2[set2[i]] = 0;
  }

  for (let i = 0; i < word1.length; i++) {
    obj1[word1[i]] += 1;
    obj2[word2[i]] += 1;
  }

  let vals1 = Object.values(obj1).sort((a, b) => a - b);
  let vals2 = Object.values(obj2).sort((a, b) => a - b);

  for (let i = 0; i < vals1.length; i++) {
    if (vals1[i] !== vals2[i]) return false;
  }

  return true;
};
