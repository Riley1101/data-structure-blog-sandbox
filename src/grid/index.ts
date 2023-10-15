let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

for (let x = 0; x < arr.length; x++) {
  let s = "";
  for (let y = 0; y < arr[x].length; y++) {
    s += arr[x][y] + "  ";
  }
  console.log(s);
}
