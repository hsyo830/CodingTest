function solution(s) {
  let sliceWord = [];

  for (let ch of s) {
    if (sliceWord.length > 0 && sliceWord[sliceWord.length - 1] === ch) {
      sliceWord.pop();
    } else {
      sliceWord.push(ch);
    }
  }

  return sliceWord.length === 0 ? 1 : 0;
}
