function solution(wallpaper) {
  let top;
  let bottom;
  let left;
  let right;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        if (top === undefined) top = i;
        if (bottom === undefined || i > bottom) bottom = i;
        if (left === undefined || left > j) left = j;
        if (right === undefined || right < j) right = j;
      }
    }
  }

  return [top, left, bottom + 1, right + 1];
}
