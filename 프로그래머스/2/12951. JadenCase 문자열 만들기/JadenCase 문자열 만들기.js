function solution(s) {
  var answer = s.split(" ");
  let result = [];
  for (let i = 0; i < answer.length; i++) {
    let word = "";
    for (let j = 0; j < answer[i].length; j++) {
      if (/^[A-Za-z]$/.test(answer[i][j])) {
        word += answer[i][j].toLowerCase();
      } else {
        word += answer[i][j];
      }
    }
    if (/^[A-Za-z]$/.test(answer[i][0])) {
      result.push(answer[i][0].toUpperCase() + word.slice(1));
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
}
