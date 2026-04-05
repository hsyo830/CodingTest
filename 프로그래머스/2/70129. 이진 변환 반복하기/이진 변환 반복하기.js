function solution(s) {
  var word = s;
  let zeroCount = 0;
  let two = 0;

  while (word !== "1") {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "1") {
        count++;
      } else {
        zeroCount++;
      }
    }
    word = count.toString(2);
    two++;
  }

  return [two, zeroCount];
}
