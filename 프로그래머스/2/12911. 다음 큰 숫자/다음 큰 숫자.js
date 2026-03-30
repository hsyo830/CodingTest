function solution(n) {
  var answer = 0;
  let changeN = n.toString(2);
  let stringN = String(changeN);
  let count = 0;
  let newCount = 0;
  for (let i = 0; i < stringN.length; i++) {
    if (stringN[i] === "1") {
      count++;
    }
  }
  while (count !== newCount) {
    newCount = 0;
    n++;
    let changeN = n.toString(2);
    let stringN = String(changeN);
    for (let i = 0; i < stringN.length; i++) {
      if (stringN[i] === "1") {
        newCount++;
      }
    }
    if (count === newCount) {
      return n;
    }
  }
}
