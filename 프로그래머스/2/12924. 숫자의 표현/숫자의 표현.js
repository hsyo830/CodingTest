function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = i; j <= n; j++) {
      let nextCount = count + j;
      if (nextCount < n) {
        count += j;
      } else if (nextCount === n) {
        answer++;
        break;
      } else if (nextCount > n) {
        break;
      }
    }
  }
  return answer;
}
