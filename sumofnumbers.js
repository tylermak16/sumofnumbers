const list = [5, 13, 2, 4, 10, 9, 1];
function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(arr) {
  let sum = 0;
  const i = 0;
  while (i < arr.length) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumWhile(list));

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}

console.log(sumRecursion(list));

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(list));
