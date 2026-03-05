const datas = [
    { num: 0, str: "zero" },
    { num: 1, str: "one" },
    { num: 2, str: "two" },
    { num: 3, str: "three" },
    { num: 4, str: "four" },
    { num: 5, str: "five" },
    { num: 6, str: "six" },
    { num: 7, str: "seven" },
    { num: 8, str: "eight" },
    { num: 9, str: "nine" },
  ];

function solution(s) {
  datas.forEach((data) => {
    let result = s.replaceAll(data.str, data.num);
    s = result;
  });

  return Number(s);
}
