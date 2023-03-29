function getDegit(number, place, longestNumber) {
  let string = number.toString();
  const size = string.length;
  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function getLongestNumber(arr) {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentLength = arr[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}
function radix_sort(arr) {
  console.log("Input : ", arr);
  const longestNumber = getLongestNumber(arr);
  let buckets = new Array(10).fill([], 0, 10);
  console.log(buckets);
  for (let i = longestNumber - 1; i >= 0; i--) {
    while (arr.length) {
      const current = arr.shift();
      buckets[getDegit(current, i, longestNumber)].push(current);
    }
    console.log(buckets)
    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        arr.push(buckets[j].shift());
      }
    }
  }

  console.log(arr);
}

let array = [];
for (let i = 0; i < 4; i++) {
  array.push(Math.floor(Math.random() * 500001));
}
radix_sort(array);
export {};
