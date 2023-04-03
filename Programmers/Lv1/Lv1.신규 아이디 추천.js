function solution(new_id) {
  new_id = new_id.toLowerCase();

  const regex = /[^0-9a-z-_.]+/g;
  new_id = new_id.replaceAll(regex, "");

  let len = new_id.length;
  while (true) {
    new_id = new_id.replaceAll("..", ".");

    if (len === new_id.length) break;

    len = new_id.length;
  }

  if (new_id[0] === "." && new_id.at(-1) === ".") new_id = new_id.slice(1, -1);
  else if (new_id.at(-1) === ".") new_id = new_id.slice(0, -1);
  else if (new_id[0] === ".") new_id = new_id.slice(1);

  if (new_id === "") new_id = "a";

  if (new_id.length > 15) new_id = new_id.slice(0, 15);
  if (new_id.at(-1) === ".") new_id = new_id.slice(0, -1);

  if (new_id.length < 3) {
    let len = new_id.length;
    while (len < 3) {
      new_id = new_id + new_id.at(-1);
      len = new_id.length;
    }
  }

  return new_id;
}
