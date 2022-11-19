// Map 활용
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  let rec1 = (ay2 - ay1) * (ax2 - ax1);
  let rec2 = (by2 - by1) * (bx2 - bx1);

  let mapW = new Map();
  let mapH = new Map();

  getAllCoord(mapW, ax1, ax2);
  getAllCoord(mapW, bx1, bx2);
  getAllCoord(mapH, ay1, ay2);
  getAllCoord(mapH, by1, by2);

  let w = getLength(mapW);
  let h = getLength(mapH);

  return w && h ? rec1 + rec2 - (w - 1) * (h - 1) : rec1 + rec2;
};

function getAllCoord(map, a, b) {
  for (let i = a; i <= b; i++) {
    if (map.get(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }
}

function getLength(map) {
  let length = 0;
  for (const v of map.values()) {
    if (v === 2) length++;
  }

  return length;
}
