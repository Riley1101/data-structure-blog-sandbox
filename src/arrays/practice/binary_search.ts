function binary_search_practice_1(
  arr: number[],
  value: number
): number | undefined {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      console.log(arr[mid]);
      return arr[mid];
    }
    if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

function binary_search_practice_2(arr: number[], value: number) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      console.log(arr[mid]);
      return mid;
    }
    if (value > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let data = [
  { name: "arkar", id: 1 },
  { name: "in", id: 6 },
  { name: "myat", id: 3 },
  { name: "live", id: 5 },
  { name: "i", id: 4 },
  { name: "kaunb", id: 2 },
  { name: "world", id: 7 },
];

function insertion_sort_obs(arr: { name: string; id: number }[]) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j].id > current.id) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function binary_search_practice_3(arr: { name: string; id: number }[], item) {
  arr = insertion_sort_obs(arr);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid].id === item) {
      console.log(arr[mid]);
      return mid;
    }
    if (item > arr[mid].id) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

binary_search_practice_3(data, 3);

export {};
