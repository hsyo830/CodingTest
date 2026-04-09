function solution(n) {
  const MOD = 1234567;

  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1; // 1칸까지 가는 방법 수
  let prev1 = 2; // 2칸까지 가는 방법 수
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = (prev1 + prev2) % MOD;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}
