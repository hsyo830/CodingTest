function solution(n) {
  var answer = 0;
  let prevCount = 0;
  let nextCount = 1;

  for (let i = 2; i <= n; i++) {
    answer = (prevCount + nextCount) % 1234567;
    prevCount = nextCount;
    nextCount = answer;
  }

  return answer % 1234567;
}
