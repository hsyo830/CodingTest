function solution(n, words) {
  let wordArr = [words[0]];
  let member = 1;
  let againCount = 1;

  for (let i = 1; i < words.length; i++) {
    member++;
    if (member > n) {
      againCount++;
      member = 1;
    }

    if (
      wordArr.includes(words[i]) ||
      wordArr[wordArr.length - 1][wordArr[wordArr.length - 1].length - 1] !==
        words[i][0]
    ) {
      return [member, againCount];
    } else {
      wordArr.push(words[i]);
    }
  }

  return [0, 0];
}
