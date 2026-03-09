function solution(s) {
  let countLeft = 0;
  let countRight = 0;

  if (s[0] === ")") {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (i !== 0 && countRight > countLeft) {
      return false;
    }
    if (s[i] === "(") {
      countLeft += 1;
    } else if (s[i] === ")") {
      countRight += 1;
    }
  }
  return countLeft === countRight ? true : false;
}
