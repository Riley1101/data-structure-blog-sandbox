function countTo(max, current, list) {
  if (current < max) {
    console.log(current);
    list.push(current);
    return countTo(max, current + 1, list);
  }
}

function fibonacci(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci_2(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function nested_added(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nested_added(current);
    } else {
      sum += current;
    }
  }
  console.log(sum);
  return sum;
}

function nested_added_2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      sum += nested_added_2(current);
    } else {
      sum += current;
    }
  }
  console.log(sum);
  return sum;
}

function factorial(n) {
  if (n < 2) return 1;
  else {
    return n * factorial(n - 1);
  }
}
let res =  factorial(3)
console.log(res)

export {};
