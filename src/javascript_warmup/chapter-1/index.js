const { isPrivateIdentifier } = require("typescript");

const assert = require("assert");
/**
 *  function as object
 */
let sword = function () {
  return 1;
};
sword.count = 0;

/**
 *  Storing function
 */
let store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
    return false;
  },
};

function ninja() {}
function ninja2() {}
assert(store.add(ninja), "function added");
assert(store.add(ninja2), "function added 2");

/**
 *  Self Memorizing function
 */

function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = new Map();
  }
  if (isPrime.answers.has(value)) {
    return isPrime.answers.get(value);
  }
  var prime = value !== 1;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  isPrime.answers.set(value, prime);
  return prime;
}

let res = isPrime(3);
let res2 = isPrime(4);

// fib(10)

function fib(num) {
  if (!fib.cache) {
    fib.cache = new Map();
  }
  if (fib.cache.has(num)) {
    return fib.cache.get(num);
  }
  if (num == 1) {
    return num;
  }
  let res = num + fib(num - 1);
  fib.cache.set(num, res);
  return res;
}

/**
 * defining functions
 */
let f = new Function("a", "b", "return a + b");

function* myfun() {
  yield 1;
}

function myFun(num) {
  console.log(num);
  return 1;
}

function sum() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

let ninjaObj = {
  skulk: function (name) {
    console.log(" i gets call " + name);
  },
  skulk1: function (name) {
    console.log(" i gets call");
  },
};

function skulk(n) {
  console.log(this.skulk(n));
}
skulk.apply(ninjaObj, ["hello"]);
