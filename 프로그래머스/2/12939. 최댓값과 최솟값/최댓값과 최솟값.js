function solution(s) {
  var answer = s.split(" ");
  answer.sort((a, b) => a - b);
  let result = [answer[0], answer[answer.length - 1]];
  return result.join(" ");
}
