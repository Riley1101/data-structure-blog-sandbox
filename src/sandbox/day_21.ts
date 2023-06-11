export function countingStairCase(n: number): number {
  if (n < 2) return 1;
  return countingStairCase(n - 1) + countingStairCase(n - 2);
}

console.log(countingStairCase(7));

export function towerOfHanoi(n: number, from: string, to: string, aux: string) {
  if (n === 0) {
    return;
  }
  towerOfHanoi(n - 1, from, aux, to);
  console.log(`Move ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, aux, to, from);
}
towerOfHanoi(3, "A", "C", "B");
