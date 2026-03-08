function solution(s) {
  var answer = s.split(" ");
  let result = [];
  for (let i = 0; i < answer.length; i++) {
    let word = "";
    for (let j = 0; j < answer[i].length; j++) {
      if (j % 2 === 0) {
        word += answer[i][j].toUpperCase();
      } else {
        word += answer[i][j].toLowerCase();
      }
    }
    result.push(word);
  }
  return result.join(" ");
}
