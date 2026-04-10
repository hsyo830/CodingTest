function solution(array) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i]; j++) {
      let str = String(array[i]);
      if (str[j] === "7") {
        answer++;
      }
    }
  }
  return answer;
}
