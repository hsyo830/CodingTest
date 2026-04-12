function solution(arr) {
  let maxNum = arr.reduce((acc, num) => acc * num, 1);

  for (let i = 1; i <= maxNum; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i % arr[j] === 0) {
        count++;
      }
    }
    if (count === arr.length) {
      return i;
    }
  }
}
