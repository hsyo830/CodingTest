function solution(name, yearning, photo) {
  var answer = [];
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let index = name.indexOf(photo[i][j]);
      if (index !== -1) {
        score += yearning[index];
      }
    }
    answer.push(score);
  }
  return answer;
}
