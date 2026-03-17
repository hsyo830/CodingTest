function solution(arr) {
  let small = arr.slice();
  let find = arr.sort((a, b) => a - b);
  return small.length === 1 ? [-1] : small.filter((x) => x !== find[0]);
}
