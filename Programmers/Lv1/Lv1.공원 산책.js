function solution(park, routes) {
  var answer = [];
  let cur;
  routes = routes.map((el) => el.split(" "));

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        cur = [i, j];
        break;
      }
    }
    if (cur) break;
  }

  for (let i = 0; i < routes.length; i++) {
    let [dir, dis] = routes[i];
    let changedCur = isPossibleWay(park, cur, dir, +dis);
    if (changedCur) cur = changedCur;
  }

  return cur;
}

function isPossibleWay(park, cur, dir, dis) {
  let temp = [...cur];

  if (dir === "N") {
    if (temp[0] - dis < 0) return false;
    for (let i = dis; i > 0; i--) {
      temp[0] -= 1;
      if (park[temp[0]][temp[1]] === "X") return false;
    }
  } else if (dir === "S") {
    if (temp[0] + dis >= park.length) return false;
    for (let i = dis; i > 0; i--) {
      temp[0] += 1;
      if (park[temp[0]][temp[1]] === "X") return false;
    }
  } else if (dir === "W") {
    if (temp[1] - dis < 0) return false;
    for (let i = dis; i > 0; i--) {
      temp[1] -= 1;
      if (park[temp[0]][temp[1]] === "X") return false;
    }
  } else {
    if (temp[1] + dis >= park[0].length) return false;
    for (let i = dis; i > 0; i--) {
      temp[1] += 1;
      if (park[temp[0]][temp[1]] === "X") return false;
    }
  }

  return temp;
}
