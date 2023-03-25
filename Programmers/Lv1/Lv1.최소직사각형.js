function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    let [w, h] = sizes[i][0] > sizes[i][1] ? [sizes[i][0], sizes[i][1]] : [sizes[i][1], sizes[i][0]];

    if (width < w) width = w;
    if (height < h) height = h;
  }
  return width * height;
}
