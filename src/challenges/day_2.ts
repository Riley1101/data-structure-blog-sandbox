function reduceTest() {
  let arr = [1, 2, 3, 4, 54];
  let sum = arr.reduce((a, b,index,arr) => {
      console.log(a,b,index,arr);
      return a + b
  });
  console.log(sum);
}
console.log(reduceTest());

