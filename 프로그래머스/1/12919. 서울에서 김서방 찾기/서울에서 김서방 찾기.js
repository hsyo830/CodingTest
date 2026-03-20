function solution(seoul) {
  let findKim = seoul.findIndex((x) => x === "Kim");
  return `김서방은 ${findKim}에 있다`;
}