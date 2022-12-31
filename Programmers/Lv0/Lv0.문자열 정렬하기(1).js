function solution(my_string) {
  return my_string
    .split("")
    .filter((s) => !isNaN(+s))
    .map((s) => +s)
    .sort((a, b) => a - b);
}
