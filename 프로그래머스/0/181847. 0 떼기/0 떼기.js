function solution(n_str) {
  var answer = "";
  let count = 0;
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0" && count === 0) {
      answer += n_str[i];
      count++;
    } else if (count === 1) {
      answer += n_str[i];
    }
  }
  return answer;
}
