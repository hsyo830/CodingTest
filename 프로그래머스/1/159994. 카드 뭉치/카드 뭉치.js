function solution(cards1, cards2, goal) {
  let card1Index = 0;
  let card2Index = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[card1Index]) {
      card1Index++;
    } else if (goal[i] === cards2[card2Index]) {
      card2Index++;
    } else {
      return "No";
    }
  }

  return "Yes";
}