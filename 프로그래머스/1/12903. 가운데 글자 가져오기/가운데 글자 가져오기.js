function solution(s) {
  if (s.length % 2 === 0) {
    let answer = s[Math.floor(s.length / 2) - 1];
    answer += s[Math.floor(s.length / 2)];
    return answer;
  } else {
    let answer = s[Math.floor(s.length / 2)];
    return answer;
  }
}
