function solution(a, b) {
  var date = new Date(`2016-${a}-${b}`);
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return week[date.getDay()];
}
