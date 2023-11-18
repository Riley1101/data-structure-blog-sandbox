function map<T>(ele: T[], callback: Function): T[] {
  let newEle = [];
  for (let i in ele) {
    newEle[i] = callback(ele[i]);
  }
  return newEle;
}

let value = [1, 2, 3, 4];

function reduce<T>(values: T[], callback: Function, initialValue = 0) {
  for (let i in values) {
    initialValue = callback(initialValue, values[i]);
  }
  return initialValue;
}

let result = value.reduce((acc, cur) => {
  return acc + cur;
}, 0);

let fArry = [
  [1, 2],
  [3, 4],
].reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

let words = ["apple", "orange"];

let counts = words.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

let dups = [1, 2, 3, 1, 2, 3];

let numberMap = dups.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

let myReduce = <T, R>(
  list: T[],
  initial: R,
  callback: (acc: R, cur: T) => R,
) => {
  for (let i in list) {
    initial = callback(initial, list[i]);
  }
  return initial;
};
let resultMap = myReduce([1, 2, 3, 4, 4, 2, 1], {}, (acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
});

let marks = [1, 2, 3, 4, 5, 6, 7, 8];

let odds = marks.filter((ele) => ele % 2 == 0);

let even = marks.filter((ele, indx) => {
  // side effect
  if (ele % 2 === 0) {
    marks[indx] = marks[indx] * 2;
  }
  return ele % 2 != 0;
});

console.log(odds);
console.log(even);
console.log(odds);

const obj = { name: "Version 1", additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };

shallowCopy1.name = "Version 2";
shallowCopy1.additionalInfo.version = 2;

let apple = { name: "apple", nested: { price: 200 } };
let applike = { ...apple };

console.log("=================");

console.log(apple);
console.log(applike);

console.log("=================");

applike.name = "orange";
apple.nested.price = 10;

console.log(apple);
console.log(applike);

function myfilter(arr, callback) {
  let a = [];
  for (let i in arr) {
    if (callback(arr[i], i, arr)) {
      a.push(arr[i]);
    }
  }
  return a;
}

console.log(
  myfilter([1, 2, 3, 4, 5], (ele) => {
    return ele % 2 == 0;
  }),
);
