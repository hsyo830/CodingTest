function solution(n) {
  let arr = [];
    for(let i=String(n).length-1; i>=0; i--){
      arr.push(Number(String(n)[i]));
    }
    return arr;
}