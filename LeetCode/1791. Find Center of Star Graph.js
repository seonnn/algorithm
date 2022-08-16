var findCenter = function (edges) {
  let [[idx00, idx01], [idx10, idx11]] = edges;
  // let  = edges[1]

  if (idx00 === idx10 || idx00 === idx11) return idx00;
  else return idx01;
};
