let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [hear, see] = input[0].split(" ").map((el) => +el);
let list = [];
let count = 0;
let result = [];

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(Math.max(hear, see));

for (let i = 1; i <= hear; i++) {
  ht.set(input[i], input[i]);
}

for (let i = hear + 1; i < input.length; i++) {
  let temp = ht.get(input[i]);
  if (ht.get(input[i])) {
    count++;
    result.push(temp);
  }
}

result.sort();

console.log([count, ...result].join("\n"));
