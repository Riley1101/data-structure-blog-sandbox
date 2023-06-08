export function countingStairCase(n: number): number {
  if (n < 2) return 1;
  return countingStairCase(n - 1) + countingStairCase(n - 2);
}

console.log(countingStairCase(7));
// 3 => 1,1,1, / 1,2,
// 4 => 1,1,1,1 /    1,1,2,1 / 1,2,1,1 / 2,1,1,1
// 5  => 1,1,1,1 /    1,1,2,1 / 1,2,1,1 / 2,1,1,1
