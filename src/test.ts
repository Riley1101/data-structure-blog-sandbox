function test() {
  var a = 12;
  var b = 24;
  var c = a + b;
  console.log(c);
  while (a > 0) {
    a = a - 1;
    b = b + 1;
    console.log(a);
    console.log(b);
  }
}

test();
