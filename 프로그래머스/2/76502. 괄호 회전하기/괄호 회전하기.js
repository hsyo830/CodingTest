function solution(s) {
  let answer = 0;
  let rotate = s;

  for (let i = 0; i < s.length; i++) {
    let stack = [];
    let result = true;

    for (const arr of rotate) {
      if (arr === "(" || arr === "{" || arr === "[") {
        stack.push(arr);
      } else {
        if (stack.length === 0) {
          result = false;
          break;
        }

        const top = stack[stack.length - 1];

        if (
          (arr === ")" && top !== "(") ||
          (arr === "}" && top !== "{") ||
          (arr === "]" && top !== "[")
        ) {
          result = false;
          break;
        }

        stack.pop();
      }
    }

    if (result && stack.length === 0) {
      answer++;
    }

    rotate = rotate.slice(1) + rotate[0];
  }

  return answer;
}