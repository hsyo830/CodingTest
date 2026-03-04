function solution(a, b) {
  let result = 0;

  let num1 = a > b ? a : b;
  let num2 = a < b ? a : b;

  for (let i = num2; i <= num1; i++) {
    result += i;
  }
  return result;
}
