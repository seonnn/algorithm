function solution(maps) {
  const start = findTarget(maps, "S");
  const lever = findTarget(maps, "L");

  const startToLever = bfs(maps, [...start, 0], "L");
  const leverToExit = bfs(maps, [...lever, 0], "E");

  return startToLever === -1 || leverToExit === -1 ? -1 : startToLever + leverToExit;
}

function findTarget(maps, target) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === target) {
        return [i, j];
      }
    }
  }
}

function bfs(maps, start, target) {
  const row = maps.length;
  const col = maps[0].length;
  const visited = Array.from({ length: row }, () => Array(col).fill(false));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [x, y, len] = queue.shift();

    if (maps[x][y] === target) {
      return len;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < row && ny >= 0 && ny < col && maps[nx][ny] !== "X") {
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, len + 1]);
        }
      }
    }
  }

  return -1;
}

// 시간초과
// function solution(maps) {
//   var answer = 0;
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];
//   const row = maps.length;
//   const col = maps[0].length;

//   let start;
//   let lever;

//   for (let i = 0; i < maps.length; i++) {
//     for (let j = 0; j < maps[0].length; j++) {
//       if (maps[i][j] === "S") {
//         start = [i, j, 0];
//         break;
//       }
//     }

//     if (start) break;
//   }

//   for (let i = 0; i < maps.length; i++) {
//     for (let j = 0; j < maps[0].length; j++) {
//       if (maps[i][j] === "L") {
//         lever = [i, j, 0];
//         break;
//       }
//     }

//     if (lever) break;
//   }

//   const startToLever = bfs(start, "L");
//   const leverToExit = bfs(lever, "E");

//   return startToLever === -1 || leverToExit === -1 ? -1 : startToLever + leverToExit;

//   function bfs(start, target) {
//     let queue = [start];
//     let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));

//     while (queue.length) {
//       let [x, y, len] = queue.shift();
//       visited[x][y] = true;

//       if (maps[x][y] === target) {
//         return len;
//       }

//       for (let i = 0; i < 4; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];
//         if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny] && maps[nx][ny] !== "X") {
//           queue.push([nx, ny, len + 1]);
//         }
//       }
//     }

//     return -1;
//   }
// }
