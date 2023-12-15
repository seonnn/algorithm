var destCity = function (paths) {
  let obj = {};

  for (let i = 0; i < paths.length; i++) {
    obj[paths[i][0]] = paths[i][1];
    if (typeof obj[paths[i][1]] === "undefined") obj[paths[i][1]] = "";
  }

  for (let key in obj) {
    if (obj[key] === "") return key;
  }
};
